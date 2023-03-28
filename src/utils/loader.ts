import { readFileSync } from "fs";
import { join } from "path";
import { DEFAULT_VAST_DIR } from "./defaults";

export class Loader {
  public app: any = {};
  async loadApp(app: string) {
    const json = readFileSync(
      join(DEFAULT_VAST_DIR, "apps", app, "app.json")
    ).toString();
    this.app = JSON.parse(json);
  }
  async getSchemas(app: string) {
    await this.loadApp(app);

    const { schemas } = this.app;
    if (!schemas) throw new Error("Could not parse JSON to schema");

    return schemas;
  }
}
