module.exports = {
  extends: [
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
    "eslint-config-prettier",
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
  },
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
  },
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        offsetTernaryExpressions: true,
        ignoredNodes: [
          "ConditionalExpression > ConditionalExpression",
          "LogicalExpression > LogicalExpression",
          "LogicalExpression > JSXElement",
          "ConditionalExpression > JSXElement",
        ],
      },
    ],
    camelcase: ['error', { ignoreImports: true, ignoreDestructuring: true, ignoreGlobals: true }],
    "max-params": ["error", { max: 3 }],
    "max-len": ["error", { code: 100, ignoreComments: true }],
    "max-lines": [
      "error",
      { max: 350, skipBlankLines: true, skipComments: true },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "no-restricted-exports": "off",
    "default-param-last": "off",
    "react/function-component-definition": "off",
    "@typescript-eslint/no-require-imports": "error",
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    "no-undef": "off",
    // https://github.com/typescript-eslint/typescript-eslint/issues/2483
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    // 变量声明的情况推断不出来, 暂时禁用掉
    // https://github.com/yannickcr/eslint-plugin-react/issues/2353
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    "react/forbid-foreign-prop-types": "error",
    "arrow-parens": ["error", "as-needed"],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "no-underscore-dangle": "off",
    "array-callback-return": "off",
    "no-confusing-arrow": "off",
    "consistent-return": "off",
    "no-plusplus": "off",
    // 某些情况下会推断错误, 例如 styled 包装组件时
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "react/default-props-match-prop-types": "off",
    "react/static-property-placement": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-newline": "off",
  },
};
