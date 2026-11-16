# 商資系 AI 學習知識庫

一個以原生 HTML、CSS、JavaScript 製作的靜態知識網站，整理 AI、Vibe Coding、GitHub 與資料庫入門知識。

## 本機瀏覽
直接以瀏覽器開啟 `index.html` 即可。

## 專案檔案
- `AGENTS.md`：AI 開發規則，定義專案目的、視覺、結構與新增內容流程。
- `index.html`：網站首頁。
- `style.css`：共用樣式。
- `script.js`：搜尋與分類篩選功能。
- `pages/`：主題介紹頁。
- `articles/`：文章內容素材。
- `assets/`：靜態圖片與素材。

## GitHub Pages 部署
1. 在 GitHub 建立新的 Repository，例如 `business-ai-learning-hub`。
2. 將本資料夾內所有檔案上傳至 Repository 根目錄。
3. 進入 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇 **Deploy from a branch**。
5. Branch 選 `main`，資料夾選 `/ (root)`，按下 Save。
6. 等待 GitHub Pages 部署完成，使用 Pages 顯示的網址瀏覽。

## 如何讓 AI 延續開發
在 AI 程式開發工具中開啟本專案，先要求 AI 閱讀 `AGENTS.md`，再提出新增文章或頁面的需求。規則文件會讓 AI 沿用既有色彩、檔案命名、資料夾位置、內容格式與測試流程，避免每次重新定義網站。
