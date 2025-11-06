import { type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import JSX from "@vitejs/plugin-vue-jsx";
import UnoCSS from "@unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver, ElementPlusResolver } from "unplugin-vue-components/resolvers";

/**
 * 插件配置
 * 集中管理所有Vite插件
 */
export const pluginsOptions = (): PluginOption[] => [
  vue(),
  JSX(),
  UnoCSS(),
  AutoImport({
    resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    imports: [
      "vue",
      {
        "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
      },
    ],

    eslintrc: {
      enabled: true,
      filepath: "./.eslintrc-auto-import.json",
      globalsPropValue: true,
    },

    // 是否在 vue 模板中自动导入
    vueTemplate: true,
    dts: "src/typings/auto-imports.d.ts",
  }),
  Components({
    resolvers: [NaiveUiResolver(), ElementPlusResolver({ importStyle: "sass" })],
    // 指定自定义组件位置
    dirs: ["src/components", "src/**/components"],
    dts: "src/typings/components.d.ts",
  }),
];
