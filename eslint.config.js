import globals from "globals";
import js from "@eslint/js";

// ESLint 核心插件
import pluginVue from "eslint-plugin-vue";
import pluginTypeScript from "@typescript-eslint/eslint-plugin";

// Prettier 插件及配置
import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

// 解析器
import * as parserVue from "vue-eslint-parser";
import * as parserTypeScript from "@typescript-eslint/parser";

// 定义 ESLint 配置
export default [
  // 通用 JavaScript 配置
  {
    ...js.configs.recommended,
    ignores: ["**/.*", "dist/*", "*.d.ts", "public/*", "src/assets/**", "src/styles/**"], // 忽略文件
    languageOptions: {
      globals: {
        ...globals.browser, // 浏览器变量 (window, document 等)
        ...globals.node, // Node.js 变量 (process, require 等)
      },
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      ...pluginPrettier.configs.recommended.rules,
      "no-debug": "off", // 禁止 debugger
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1, // 最多允许连续的空行数
          maxEOF: 1, // 文件末尾最多允许的空行数
          maxBOF: 0, // 文件开头不允许空行
        },
      ],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" }, // return 语句前需要空行
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" }, // 变量声明后需要空行
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] }, // 连续变量声明之间空行可选
        { blankLine: "always", prev: "directive", next: "*" }, // 指令后需要空行
        { blankLine: "always", prev: "import", next: "*" }, // import 语句后需要空行
        { blankLine: "any", prev: "import", next: "import" }, // 连续 import 之间空行可选
      ],
      "prettier/prettier": [
        "error", // 使用 Prettier 进行格式化
        {
          endOfLine: "auto", // 自动识别换行符
        },
      ],
    },
  },

  // TypeScript 配置
  {
    files: ["**/*.?([cm])ts", "**/*.tsx"],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": pluginTypeScript,
    },
    rules: {
      ...pluginTypeScript.configs.strict.rules,
      "@typescript-eslint/no-explicit-any": "off", // 允许使用 any
      "@typescript-eslint/no-empty-function": "off", // 允许空函数
      "@typescript-eslint/no-empty-object-type": "off", // 允许空对象类型
      "@typescript-eslint/no-extraneous-class": "off", // 允许空类
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { disallowTypeAnnotations: false, fixStyle: "inline-type-imports" },
      ], // 统一类型导入风格
    },
  },

  // TypeScript 声明文件的特殊配置
  {
    files: ["**/*.d.ts"],
    rules: {
      "eslint-comments/no-unlimited-disable": "off", // 允许使用 eslint-disable-next-line 注释
      // "unused-imports/no-unused-vars": "off", // 允许未使用的变量
      "@typescript-eslint/ban-ts-comment": "off", // 允许使用 @ts-nocheck 注释
    },
  },

  // JavaScript (commonjs) 配置
  {
    files: ["**/*.?([cm])js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off", // 允许 require
    },
  },

  // Vue 文件配置
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: {
          // 为 <script> 标签设置解析器
          ts: parserTypeScript,
          js: parserTypeScript,
          // 为 <template> 标签设置解析器
          template: parserTypeScript,
        },
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: [".vue"],
        vueFeatures: {
          filter: true,
          interpolationAsNonHTML: false,
        },
      },
    },
    plugins: {
      vue: pluginVue,
    },
    processor: pluginVue.processors[".vue"],
    rules: {
      ...pluginVue.configs["vue3-recommended"].rules,
      "vue/no-v-html": "off", // 允许使用 v-html
      "vue/require-default-prop": "off", // 允许没有默认值的 prop
      "vue/multi-word-component-names": "off", // 允许单字组件名
      "vue/html-self-closing": [
        "error", // 强制自闭和标签
        {
          html: { void: "always", normal: "always", component: "always" },
          svg: "always",
          math: "always",
        },
      ],
      // 关闭一些可能导致解析错误的规则
      "vue/valid-template-root": "off", // 关闭无效的根元素
      "vue/no-multiple-template-root": "off", // 关闭多个根元素
      // "@typescript-eslint/no-unused-vars": "off", // 关闭未使用的变量
    },
  },
];
