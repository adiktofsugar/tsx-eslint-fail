import "tsx";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const thing = await import("./thing.js");

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
