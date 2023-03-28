import { join, normalize } from "path";
import { DEFAULT_PATH_NAME } from "./defaults";

export function mergeSourceRoot<
  T extends { sourceRoot?: string; path?: string }
>(options: T): T {
  const defaultSourceRoot =
    options.sourceRoot !== undefined ? options.sourceRoot : DEFAULT_PATH_NAME;

  options.path =
    options.path !== undefined
      ? join(normalize(defaultSourceRoot), options.path)
      : normalize(defaultSourceRoot);

  return options;
}
