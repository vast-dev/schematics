import { Path } from "@angular-devkit/core";

export interface SchemaOptions {
  /**
   * The name of the schema.
   */
  name: string;
  /**
   * The path to create the schema within the current app
   */
  path?: string | Path;
  /**
   * The root directory of the current app
   */
  sourceRoot?: string;
  /**
   * Path to the JSON file containing the schema definitions
   */
  jsonPath: string;
}
