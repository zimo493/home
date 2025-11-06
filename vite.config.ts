import { defineConfig } from "vite";

import {
  cssOptions,
  pluginsOptions,
  optimizeDepsOptions,
  serverOptions,
  resolveOptions,
  buildOptions,
} from "./build";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "/", // 基础路径
    resolve: resolveOptions(), // 路径解析配置
    server: serverOptions(), // 开发服务器配置
    css: cssOptions, // CSS预处理器配置
    plugins: pluginsOptions(), // 插件配置
    optimizeDeps: optimizeDepsOptions, // 依赖优化配置
    build: buildOptions, // 构建配置
  };
});
