/* This file configures ESLint for the project, defining linting rules and global variables. */
import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    pluginJs.configs.recommended,
    {
        languageOptions: { globals: globals.browser },
        rules: {
            semi: "error"
        }
    }
];