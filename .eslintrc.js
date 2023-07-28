module.exports = {
    env: { browser: true, es6: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true, // allow jsx
        },
    },
    settings: {
        react: { version: "detect" },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".tsx", ".ts"],
            },
        },
    },
    plugins: ["react-refresh", "react"],
    rules: {
        "react-refresh/only-export-components": "warn",
    },
};
