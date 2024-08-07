module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        "no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "never",
        "@typescript-eslint/no-implicit-any": "never",
        '@typescript-eslint/no-unused-vars': ['warn']
        // 'react-refresh/only-export-components': [
        //     'warn',
        //     { allowConstantExport: true },
        // ],
        //'array-element-newline': ["error", "never"],
        //'array-bracket-newline': ["error", "never"]
    },
}
