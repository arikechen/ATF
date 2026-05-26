# AT.field — AI Terminal Field

> **Expand your AT.field. Visualize the Future of AI.**

AT.field（ATF）是全球首款 AI 原生「絕對領域」開發駕駛艙 — 以 100% SwiftUI + AppKit 打造的原生 macOS 三欄式工具。它將終端機、程式碼編輯、SSH/Serial 連線與智慧 Sidecar 預覽引擎融合為一，提供沉浸式的開發體驗。

不再受限於太過簡化、看不見細節的 AI CLI 工具（如 Claude Code、Antigravity CLI、Codex）。透過 AT.field 的三欄佈局與視覺化 Sidecar，直接在終端機調度 AI 代理，並享有直覺、友善的人性化視覺稽核。

## 截圖

![AT.field 截圖](01-app-eula-markdown-sidecar.png)

## 為什麼選擇 AT.field？

| | AT.field | Electron 系（VS Code、Cursor、Obsidian…）|
|---|----------|----------------------------------------|
| **平台** | macOS 原生限定 | 跨平台（Chromium 封裝）|
| **底層引擎** | 100% Swift / SwiftUI / AppKit | Chromium + Node.js |
| **啟動** | < 0.1 秒（冷啟動） | 1.5 秒 ~ 4.0 秒 |
| **體積** | 40~60 MB | 150 MB ~ 400 MB |
| **記憶體** | ~40-80 MB 基準 | 200-500+ MB 基準 |
| **渲染** | Core Graphics（原生） | WebGL / Web Canvas |
| **安全** | Apple Notarization 公證，完全本地端執行 | 第三方 JS 插件 |

## 功能特色

### 三欄駕駛艙（Navigator · Core · Sidecar）

動態三欄彈性佈局。左領（Navigator）與右領（Sidecar）支援快捷鍵一鍵瞬移收合（`Cmd+0` / `Cmd+Opt+0`），將螢幕空間最大化釋放給中領核心命令區。`Cmd+1/2/3` 切換各欄焦點。開發盡在一窗，不再需要切換視窗。

### Sidecar 雙模式：Preview ↔ Edit

右側 Sidecar 一鍵切換 **Preview（預覽）** 與 **Edit（編輯）** 雙模式。支援 Markdown 即時渲染、圖片/影片/HTML/JSON/PDF 預覽，以及 40+ 語言程式碼高亮度編輯。選取檔案立刻看、立刻改，不需要另開編輯器。

### 「方案 B」路徑魔法

智慧 Regex 偵測終端機輸出中的檔案路徑、圖片檔或 localhost 網址。**點擊任何路徑** — 右側 Sidecar 在 1 秒內為您渲染成果。執行 `npm run dev`、啟動任何 HTTP 服務，即可在內建 WebKit 沙箱中即時預覽。雙手不離鍵盤。

### 完整 Git 整合

完整的專案樹狀結構 + git diff 結果直接送入 Sidecar 渲染成彩色 diff 預覽，無需切換 Source Control 應用程式。

### SSH & Serial — 統一連線管理中心

內建 Connections 面板管理所有 SSH 主機與 Serial 設備（`/dev/tty.*`）。系統 `/usr/bin/ssh` + ControlMaster 多工通道，支援 MFA/SSO/跳板機，三層路由自動處理認證。**切換標籤頁絕不中斷** 背景 SSH 或 Serial 連線 — 嵌入式開發與遠端伺服器一個 App 全管。

### 分割終端機

`⌘D` 水平分割終端機，每個 Pane 獨立 PTY Session。對照多台機器輸出或並排執行不同指令，都不需要另開視窗。

### 獨立浮動視窗與釘選

將任意 Tab 拖出主視窗，成為獨立浮動的終端機視窗。右上角圖釘可釘在所有 Space 最上層 — SSH 連線或長時間執行的腳本永遠不被其他視窗遮擋。

### AI CLI 視覺增強

Antigravity、Codex 或 Claude Code 等 CLI 工具往往過度簡化，讓開發者像「瞎子摸象」般盲目執行。AT.field 能讓您直接在終端機調度這些 AI CLI，並搭配極致友善的 Sidecar 視覺界面進行審查，點擊即預覽變更，大幅提升工作效率！

### MCP Server

內建 Unix Domain Socket JSON-RPC Server（`/tmp/atf-mcp.sock`）。NDJSON 框架，最多 3 同步連線。6 個 Toolkits（Bookmark、Session、SSH、SFTP、Audit）。三級權限管控（t0 ReadOnly / t1 Write / t2 Sensitive）。stdio relay 可直接對接 Claude Desktop、Cursor 等 AI Client。

### CLI & 深度連結

`atf` CLI 指令快速開啟檔案/資料夾。`atfield://open`、`atfield://preview`、`atfield://diff` URL Scheme 支援自動化與腳本整合。

### 智慧拖放

拖檔到終端會依 session 類型自動選擇通道 — 本機直接 `FileManager` 複製、SSH 走 SCP（失敗 fallback ZModem）、序列埠走 ZModem。若檔案已在當前目錄，則將 shell-escape 過的路徑直接插入命令列。

### Finder 服務

Finder 右鍵選單「New AI Terminal Field Tab Here」與「New AI Terminal Field Window Here」。

## 系統需求

- macOS 14.0（Sonoma）或以上
- Apple Silicon 或 Intel

## 安裝方式

1. 從 [Releases](https://github.com/arikechen/ATF/releases) 下載最新 `.dmg`
2. 開啟 `.dmg`，將 `ATF.app` 拖進 `Applications`
3. 首次開啟請右鍵 → 打開（繞過 Gatekeeper 一次）

## 原始碼

本倉庫僅包含 Release 二進位檔，原始碼維護於私有倉庫。

## 授權

詳見 [LICENSE.txt](LICENSE.txt)。
