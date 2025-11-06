import { type DepOptimizationOptions } from "vite";

/**
 * 依赖优化配置
 * 用于控制Vite的依赖预构建行为
 */
export const optimizeDepsOptions: DepOptimizationOptions = {
  include: [
    "vue",
    "vue-router",
    "pinia",
    "axios",
    "@vueuse/core",
    // Element Plus 图标
    "@element-plus/icons-vue",
    // Element Plus 样式文件
    "element-plus/es",
  ],
};
