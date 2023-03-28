import { strings } from "@angular-devkit/core";
import {
  apply,
  mergeWith,
  Rule,
  SchematicContext,
  Source,
  Tree,
  template,
  url,
  move,
} from "@angular-devkit/schematics";

import { SchemaOptions } from "./schema.schema";
import { getJsonSchemaReader } from "typeconv";
import { getTypeScriptWriter } from "typeconv";
import { makeConverter } from "typeconv";
import { Loader } from "../utils/loader";
import { mergeSourceRoot } from "../utils/source-root";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function main(_options: SchemaOptions): Rule {
  const options: SchemaOptions = {
    ...mergeSourceRoot(_options),
  };

  return async (tree: Tree, context: SchematicContext) => {
    return Promise.resolve(mergeWith(await generate(options)));
  };
}

async function generate(options: SchemaOptions): Promise<Source> {
  const loader = new Loader();
  const schemas = await loader.getSchemas(options.name);

  const reader = getJsonSchemaReader();
  const writer = getTypeScriptWriter();

  const { convert } = makeConverter(reader, writer);
  const { data } = await convert({
    data: JSON.stringify(schemas),
  });

  // const interfaceDefinition = await compile(schemas, firstSchema, {
  //   bannerComment: "",
  //   unreachableDefinitions: true,
  // });
  return (context: SchematicContext) =>
    apply(url("./files"), [
      template({
        ...strings,
        name: options.name,
        interfaceDefinition: data,
      }),
      move(options.path ?? ''),
    ])(context);
}
