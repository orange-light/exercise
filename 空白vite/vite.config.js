import { defineConfig } from "vite";
import path from "path";
import glob from "glob";
import copy from "rollup-plugin-copy";

export default defineConfig({
  base: "./",
  root: path.join(__dirname, "src"), //設定基底資料夾位置
  publicDir: path.join(__dirname, "public"), //確保public靜態資源用資料夾可以正常運作
  css: {
    devSourcemap: true, // 開啟 css source map
  },
  build: {
    outDir: path.join(__dirname, "dist"), //設定打包後的資料夾位置
    emptyOutDir: true,
    assetsInlineLimit: 0, // 關閉資源內聯ß
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "src", "**/*.html")), //為了能打包子資料夾下的html&其引入的資源
      output: {
        // assetFileNames 用於控制非 JS/CSS 靜態資源的文件名和存儲路徑
        assetFileNames: (assetInfo) => {
          // 獲取文件擴展名
          let extType = assetInfo.name.split(".").pop();
          // 判斷文件類型，並設置對應的文件夾名稱
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images"; // 圖片文件
            return `${assetInfo.originalFileName}`;
          } else if (/css|sass|scss/i.test(extType)) {
            extType = "css"; // CSS 文件
            return `assets/${extType}/[name][extname]`;
          } else if (/js|mjs|jsx/i.test(extType)) {
            extType = "js"; // JS 文件
            return `assets/${extType}/[name][extname]`;
          } else {
            extType = "assets"; // 其他資源
            // 返回資源的最終存儲路徑
            return `${assetInfo.originalFileName}`;
          }
        },
        // chunkFileNames 用於控制代碼拆分後的 JS 文件的文件名和存儲路徑
        chunkFileNames: "assets/js/[name].js",
        // entryFileNames 用於控制入口 JS 文件的文件名和存儲路徑
        entryFileNames: "assets/js/[name].js",
      },
    },
  },
    plugins: [
      copy({
        verbose: true,
        hook: 'closeBundle',
        targets: [
          { src: "src/assets/images/*", dest: "dist/assets/images/" },
          { src: "src/ajax/*", dest: "dist/ajax" },
          { src: "src/assets/json/*", dest: "dist/assets/json/" }
        ],
      }),
    ],
  server: {
    open: true,
    strictPort: false,
    watch: {
      usePolling: true,
    },
  },
});
