import { resolve } from "node:path";

/**
 * 路径解析配置
 */
export const resolveOptions = () => ({
  alias: { "@": resolve(__dirname, "../src") },
});
