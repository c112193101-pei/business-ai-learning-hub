# AGENTS.md — 商資系 AI 學習知識庫

## 專案目的
建立繁體中文學習網站，整理 AI、Vibe Coding、GitHub 與資料庫入門知識，並可持續新增文章。

## 技術規則
- 僅使用原生 HTML5、CSS3、JavaScript。
- 不使用框架、套件、資料庫、伺服器或外部 CDN。
- 網站需可直接開啟 `index.html`，並支援 GitHub Pages。
- 所有檔案都放在專案根目錄；不得建立 `pages/` 或 `articles/` 子資料夾。
- HTML 文章頁面使用 `.html`；補充筆記使用 `.md`。

## 視覺規範
- 米白與淡黃色配色，簡潔、溫暖、易閱讀。
- 背景 #FFFDF5，淡黃 #F2DF9A，文字 #34342F。
- 卡片使用圓角、淡色邊框與輕微陰影。
- 必須支援手機、平板、桌面，不可水平溢位。

## 網站結構
- `index.html`：首頁、分類、搜尋與文章入口。
- `style.css`：全站共用樣式。
- `script.js`：搜尋與分類篩選。
- `genai.html`、`vibe-coding.html`、`github-pages.html`、`database.html`：文章頁。
- `*.md`：對應文章的 Markdown 筆記。
- `README.md`：操作及部署說明。

## 新增文章規則
1. 新增 HTML 文章直接放在根目錄。
2. 檔名使用英文小寫與連字號，例如 `prompt-basics.html`。
3. 文章需有標題、摘要、分類、分段小標、實際例子及注意事項。
4. 文章頁需載入 `style.css`，並提供回首頁連結 `index.html`。
5. 新文章必須同步新增首頁文章卡片，連結使用根目錄相對路徑，例如 `prompt-basics.html`。
6. 文字使用繁體中文與台灣常用詞彙。

## AI 修改規則
- 修改前先閱讀本檔案與相關程式。
- 沿用現有色彩、字體、間距及卡片風格。
- 不可任意刪除既有功能或修改無關檔案。
- 所有按鈕必須有實際功能。
- 完成後檢查首頁、四篇文章連結、搜尋、分類篩選與手機版。
- 回報新增/修改檔案、功能及測試結果。

## GitHub Pages
- Repository 使用 `main` 分支及 `/(root)`。
- `index.html` 必須位於 Repository 根目錄。
- 所有連結使用根目錄相對路徑，不得加入 `pages/` 前綴。
