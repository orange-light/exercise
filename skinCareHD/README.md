# Vite版本
Vite 需要Node.js 版本18+ 或20+

# 基礎指令
`npm i`
安裝基礎包

`npm run dev`
開發＆自動開啟測試頁

`npm run build`
打包＆發布用


# 資料夾架構
- src：所有開發用檔案放置處，頁面放在根目錄底下。ex.src/index.html
  - src/ajax：_header.html、_footer.html放置處。
  - src/assets：輔助包。
    - src/assets/fonts：字型檔。
    - src/assets/images：圖片素材。
    - src/assets/js：js檔案，此資料夾下所有檔案將打包成一隻js檔，入口檔案唯main.js。
    - src/assets/scss：scss檔案，此資料夾下所有檔案將打包成一隻css檔，入口檔案唯main.scss。
- public：靜態資源放置處，除非Vite真的無法從src中打包起來，才將檔案放這邊。
- dis：npm run build 出來的正式內容。