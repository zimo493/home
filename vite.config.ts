import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import UnoCSS from "unocss/vite";

import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS({
      hmrTopLevelAwait: false,
    }),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
        },
      ], // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      resolvers: [
        ElementPlusResolver(), // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      ],
      eslintrc: {
        enabled: false,
        globalsPropValue: true,
      },
      // 是否在 vue 模板中自动导入
      vueTemplate: true,
      dts: "src/typings/auto-imports.d.ts",
    }),
    Components({
      resolvers: [
        NaiveUiResolver(),
        ElementPlusResolver(), // 自动导入 Element Plus 组件
      ],
      dts: "src/typings/components.d.ts",
    }),
  ],

  server: {
    host: "0.0.0.0", // 允许IP访问
    port: 1031, // 应用端口
    open: true, // 运行是否自动打开浏览器
    proxy: {
      "/powerword": {
        changeOrigin: true,
        target: "https://open.iciba.com",
        rewrite: (path: string) => path.replace("/powerword", ""),
      },
    },
  },

  // 构建
  build: {
    chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
    minify: "terser", // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境去除 console
        drop_debugger: true, // 生产环境去除 debugger
      },
      format: {
        comments: false, // 删除注释
      },
    },
    rollupOptions: {
      output: {
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: "js/[name].[hash].js",
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: "js/[name].[hash].js",
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: (assetInfo: any) => {
          const info = assetInfo.name.split(".");
          let extType = info[info.length - 1];

          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            extType = "media";
          } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
            extType = "img";
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = "fonts";
          }

          return `${extType}/[name].[hash].[ext]`;
        },
      },
    },
  },
});
