import { fileURLToPath } from "url";
import { dirname } from "path";

/**
 * Monkey patch for dirname because __dirname native can't be used with esm.
 * @param {object} meta Pass `import.meta` as the param
 */
export default function dirnameMonkeyPatch(meta) {
  const __filename = fileURLToPath(meta.url);
  const __dirname = dirname(__filename);
  return { __dirname, __filename };
}
