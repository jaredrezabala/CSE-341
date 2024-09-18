import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"},
  rules: {
    "indent": ["error", 2],  // Controla la indentación (2 espacios)
    "quotes": ["error", "single"],  // Comillas simples
    "semi": ["error", "always"],  // Punto y coma obligatorio
    "no-unused-vars": "warn",  // Marca las variables no usadas
    "eqeqeq": "error",  // Requiere === y !==
    "curly": "error",  // Siempre requiere llaves en bloques
  }},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
];