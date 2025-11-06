import { type OutputOptions } from "rollup";

/**
 * Rollup构建输出配置
 * 用于控制打包输出和代码分割策略
 */
export const rollupOutputOptions: OutputOptions = {
  chunkFileNames: "js/[name]-[hash].js",
  entryFileNames: "js/[name]-[hash].js",
  assetFileNames: "assets/[ext]/[name]-[hash].[ext]", // 统一资源文件路径
  manualChunks: (id) => {
    /** 核心框架 */
    if (/[\\/]node_modules[\\/](vue|vue-router|pinia)[\\/]/.test(id)) {
      return "vue-core";
    }

    /** 大型工具库独立分包 */
    if (/[\\/]node_modules[\\/]lodash-es[\\/]/.test(id)) {
      return "lodash";
    }
    if (/[\\/]node_modules[\\/]@vueuse[\\/]/.test(id)) {
      return "vueuse";
    }

    /** 其他工具库合并打包 */
    if (/[\\/]node_modules[\\/](axios|radash|)[\\/]/.test(id)) {
      return "utils";
    }
    /** OpenLayers显示图形库 */
    if (/[\\/]node_modules[\\/]ol[\\/]/.test(id)) {
      return "ol";
    }
  },
};

/**
 * 完整的Rollup配置
 */
export const rollupOptions = {
  output: rollupOutputOptions,
};
