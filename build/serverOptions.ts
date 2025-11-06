import { type ServerOptions } from "vite";

/**
 * 开发服务器配置
 * @param env 环境变量
 */
export const serverOptions = (): ServerOptions => ({
  // 允许IP访问
  host: "0.0.0.0",
  // 应用端口
  port: 5173,
  // 运行是否自动打开浏览器
  open: true,
  proxy: {
    /** 代理前缀为 "/power-word" 的请求  */
    "/power-word": {
      changeOrigin: true,
      // 接口地址
      target: "https://open.iciba.com",
      rewrite: (path: string) => path.replace("/power-word", ""),
    },
  },
});
