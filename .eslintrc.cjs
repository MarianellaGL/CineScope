/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".json"] },
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "simple-import-sort",
    "unused-imports",
    "prettier",
    // "react-refresh", // opcional
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // Prettier como fuente de verdad de formato
    "prettier/prettier": "warn",

    // React
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    // Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Accesibilidad
    "jsx-a11y/anchor-is-valid": "warn",

    // Imports
    "import/order": "off",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // Paquetes externos
          ["^react", "^@?\\w"],
          // Imports absolutos (si usás alias)
          ["^(@|src)(/.*|$)"],
          // Estilos
          ["^.+\\.s?css$"],
          // Relativos
          ["^\\u0000", "^\\./(?=.*/)(?!.*\\.s?css$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "simple-import-sort/exports": "warn",

    // Unused imports/vars
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    // Opcional para Vite React Refresh
    // "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
  overrides: [
    // Configs y scripts Node (CJS)
    {
      files: [
        "*.config.cjs",
        "*.config.js",
        "vite.config.*",
        "eslint.config.*",
      ],
      env: { node: true },
    },
    // Tests
    {
      files: ["**/__tests__/**/*.{js,jsx}", "**/*.{test,spec}.{js,jsx}"],
      env: { jest: true },
    },
  ],
  ignorePatterns: [
    "dist",
    "build",
    "coverage",
    ".vite",
    "node_modules",
    // Generados
    "**/*.d.ts",
  ],
};
