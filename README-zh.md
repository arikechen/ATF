# AT.field — AI Terminal Field

> **Expand your AT.field. Visualize the Future of AI.**

## AT.field 是什麼？

它不是傳統終端機，也不是另一個 Electron IDE。

**AT.field 是原生 macOS AI 終端控制台，整合 Claude Code、Codex CLI、Gemini CLI、aider、SSH、Serial port、Git diff、localhost preview 與 AI Agent 工作流。**

關鍵字：macOS AI 終端機、Claude Code 終端控制台、Codex CLI 圖形介面、AI CLI 工作流、SSH 管理、Serial port 終端、UART console、localhost 預覽、Git diff 檢視、MCP Server、AI Agent workflow。

現在很多工程師已經開始用 **Claude Code、Codex CLI、aider、OpenHands、Antigravity、Gemini CLI** — 但它們都面臨同一個問題。

核心概念很簡單：

- **AI CLI（Claude Code、Codex、Antigravity CLI）** 負責執行
- **人類** 透過 Sidecar 視覺層做監督與審查
- **三欄式介面** 同時管理：檔案導航、主終端、AI 結果可視化

它解決的是目前 AI CLI 最大的痛點：**CLI 太「盲」。**

AI 很強，但你只能看滾動文字，很難快速：

- 看 diff
- 看 Markdown
- 看 localhost 網頁
- 看圖片 / PDF
- 看 git 變更
- 看遠端裝置狀態

AT.field 的想法是：**保留 terminal-first 的工作流，但加入視覺化 Sidecar。**

## 為什麼純 CLI 工作流不夠？

AI CLI 很適合下指令、改檔案、跑測試、啟動服務，但它有一個明顯限制：**它主要是文字介面。**

當 Claude Code、Codex CLI 或其他 agent 在 terminal 裡告訴你它修改了某個檔案、產生了某份報告、啟動了 localhost 服務，或輸出了一段 diff，你通常不能直接在 CLI 裡舒服地查看結果。

例如：

- AI 說它修改了 `src/App.swift`
- AI 產生了 `report.md`
- AI 啟動了 `http://localhost:3000`
- AI 輸出了一段 diff
- AI 建立了一張圖片或 PDF
- AI 要你檢查 git 變更

在純 terminal 裡，你通常需要額外做很多事：

- 用 `cat`、`less`、`vim` 或 `nano` 打開檔案
- 用 `!` 或 shell 指令呼叫外部工具
- 切到 Finder 找檔案
- 切到瀏覽器打開 localhost
- 切到 VS Code / Cursor 看 diff
- 切到 Preview 看圖片或 PDF
- 再切回 terminal 繼續跟 AI 對話

這些動作本身都不難，但會一直打斷工作流。

AI CLI 的問題不是不能做事，而是：**AI 做完事情之後，人類很難在同一個地方快速看懂、確認與修正結果。**

AT.field 補上的就是這一層。當 terminal 出現檔案路徑、localhost URL、Markdown、圖片、PDF、HTML 或 diff，AT.field 可以直接在右側 Sidecar 打開。你不用離開 terminal，也不用一直在 Finder、Browser、Preview、VS Code 之間切換。

這讓 AI CLI 從「只會輸出文字的黑箱」變成一個可以被即時觀察的工作流程。

## 一個地方處理所有 terminal 工作

AT.field 不只是拿來跑 AI CLI。它的目標是把工程師日常在 terminal 周邊需要處理的事情集中在同一個工作空間：

- 本機 shell
- AI CLI / coding agent
- SSH 遠端主機
- Serial port / UART 裝置
- localhost web preview
- Markdown / PDF / image / HTML 預覽
- Git diff 與檔案變更審查
- 長時間執行的 script、server、log tail
- MCP / automation integration

一般情況下，這些工作會散在很多地方：iTerm2、Finder、VS Code、瀏覽器、Preview、SSH config、serial console、git GUI。

AT.field 把它們放回同一個三欄式介面：

- 左邊管理專案、檔案、連線與 session
- 中間執行 terminal、AI CLI、SSH、Serial
- 右邊即時預覽輸出結果、檔案內容、diff、localhost 頁面與媒體檔

你可以在同一個視窗裡執行指令、連遠端機器、看 AI 修改、檢查 localhost、查看 git diff、開 Markdown 報告、監控 serial log，不需要在多個 app 之間來回切換。

## SSH 與 Serial：遠端與硬體工作流的一級功能

很多 terminal app 把 SSH 當作主要功能，但 Serial port 通常只是外部工具或附屬功能。對 embedded、robotics、homelab、infra 開發者來說，這其實不夠。

實際工作時，你可能同時需要：

- SSH 到遠端 Linux server
- 連進 Raspberry Pi、Jetson、router、NAS 或 dev board
- 透過 `/dev/tty.*` 查看 UART / serial console
- 一邊 tail log，一邊跑本機 build
- 一邊讓 AI CLI 修改程式，一邊在遠端機器測試
- 把檔案拖到本機、SSH session 或 Serial session 中

AT.field 把 SSH 和 Serial 都當成同一級的 session 來管理。

你可以在同一個連線中心管理 SSH host 和 Serial device，切換 tab 時不會中斷背景連線；也可以把 session 拖出成浮動視窗，釘在所有 Spaces 上方，讓長時間 log、部署、測試或硬體 console 不會被其他視窗蓋掉。

這讓 AT.field 不只是 AI coding 工具，也是一個適合日常工程維運的 terminal cockpit。

### 和 Cursor / VS Code 最大差異

| | AT.field | Cursor / VS Code |
|---|----------|------------------|
| **技術架構** | SwiftUI + AppKit（macOS 原生） | Electron（Chromium） |
| **UI 引擎** | macOS 原生 | Chromium |
| **啟動速度** | < 0.1 秒（冷啟動） | 1.5 秒 ~ 4.0 秒 |
| **記憶體** | ~40-80 MB 基準 | 200-500+ MB 基準 |
| **核心定位** | AI Terminal Cockpit | IDE |
| **AI 角色** | 外部 Agent 調度 | IDE 內建功能 |
| **操作核心** | Terminal-first | GUI-first |

它不是 IDE replacement。更像是：

**iTerm2 + tmux + Preview + SSH Manager + MCP Gateway + AI Agent Inspector** — 融合後的 macOS 原生產品。

## 截圖

![AT.field macOS AI 終端控制台與 Sidecar Markdown 預覽](01-app-eula-markdown-sidecar.png)

## 真正的核心：Sidecar 設計

這是整個產品最聰明的地方。

當終端輸出 `./report.md` 或 `http://localhost:3000`，AT.field 會自動辨識檔案路徑、localhost URL、圖片、PDF、HTML、diff，然後直接在右側 Sidecar 預覽。

你再也不用：

- Cmd+Tab 開瀏覽器
- 開 Finder
- 開 VSCode

終端本身變成 **command layer** 和 **orchestration layer**，Sidecar 變成 **visualization layer**。

這很符合 AI Agent 時代的工作方式：AI 在終端裡執行，人類透過視覺層監督、授權、修正。**真正危險的是 AI 改了東西，但你沒有觀察層** — AT.field 給你這個觀察層。

### 這個專案真正厲害的地方

1. **Sidecar 是真正的核心創新** — 在不破壞 terminal-first 工作流的前提下引入視覺化
2. **AI CLI 強化** — 你可以即時審查 AI 修改、看 diff、看檔案內容、追蹤 session 結果。比「全自動化」更重要的是：**你有審計層**
3. **MCP Server** — AT.field 不只是 terminal，它還是 **AI 工具基礎設施**。AI 可以透過 MCP 讀取 session、管理 SSH、操作檔案、存取 audit 資訊。這方向其實很像 **AI-native operating environment**
4. **SSH + Serial 一起整合** — 大部分 terminal 只重視 SSH，很少把 serial 當一級功能。做硬體的人常常同時用 SSH 和 UART/tty/dev board — AT.field 把它們整合進同一個工作流

## 功能特色

### 三欄駕駛艙（Navigator · Core · Sidecar）

動態三欄佈局。左領（Navigator）與右領（Sidecar）支援快捷鍵一鍵收合（`Cmd+0` / `Cmd+Opt+0`），核心終端區常駐。`Cmd+1/2/3` 切換各欄焦點。開發盡在一窗。

### Sidecar 雙模式：Preview ↔ Edit

一鍵切換 **Preview**（Markdown 渲染、圖片/影片/HTML/JSON/PDF）與 **Edit**（40+ 語言語法高亮）。選取檔案立刻看、立刻改。

### 路徑魔法（方案 B）

智慧 Regex 偵測終端輸出中的檔案路徑、圖片和 URL。**點擊任何路徑** — Sidecar 在 1 秒內渲染。執行 `npm run dev`，內建 WebKit 沙箱即時預覽。

### AI CLI 視覺增強

Claude Code、Codex、Antigravity — 它們都在「盲跑」。AT.field 讓你從終端調度 AI CLI，然後在 Sidecar 視覺化審查 diff、檔案內容、session 狀態。**AI 改了東西，你有觀察層。**

### SSH & Serial（統一連線中心）

管理 SSH 主機與 Serial 設備（`/dev/tty.*`）。系統 `ssh` + ControlMaster 多工、MFA/SSO/跳板機、三層認證路由。**切換 Tab 絕不中斷**背景連線。嵌入式、機器人、Homelab、Infra 必備。

### 分割終端機

`⌘D` 水平分割。每個 Pane 獨立 PTY session。對照多台機器輸出、並排執行不同指令。

### 獨立浮動視窗

將任意 Tab 拖出成浮動視窗，釘在全部 Space 最上層 — SSH 連線和長時間腳本永不遺失。

### Git 整合

專案樹 + git diff 直接送入 Sidecar 彩色預覽。不用切換 Source Control app。

### MCP Server

內建 Unix Domain Socket JSON-RPC Server（`/tmp/atf-mcp.sock`）。NDJSON 框架，最多 3 同步連線。6 個 Toolkits（Bookmark、Session、SSH、SFTP、Audit）。三級權限管控（t0 ReadOnly / t1 Write / t2 Sensitive）。Claude Desktop、Cursor 等 AI Client stdio relay。

### 智慧拖放

拖檔到終端自動選擇通道：本機 `FileManager`、SSH（SCP→ZModem fallback）、Serial（ZModem）。若已在當前目錄則插入 shell-escape 路徑。

### CLI & URL Scheme

`atf` CLI 指令。`atfield://open`、`atfield://preview`、`atfield://diff` 深度連結。

### Finder 服務

Finder 右鍵「New AI Terminal Field Tab Here」與「New AI Terminal Field Window Here」。

## 適合誰？

**非常適合：**

- **AI-heavy terminal developer** — 天天用 Claude Code、Codex CLI、Agent workflow，你應該會很喜歡它
- **macOS power user** — iTerm2 重度使用者、tmux 使用者、keyboard-first workflow 玩家
- **Infra / Embedded / Robotics 開發者** — SSH、serial、split terminal、always-on floating terminal 都做得很對味

**不適合：**

- **Windows / Linux 使用者** — 完全是 macOS native，沒有跨平台方向
- **傳統 GUI IDE 使用者** — 習慣 IntelliJ、VSCode GUI workflow 的話，它不是 GUI-first 工具

## 真正的定位

README 最關鍵的一句話：**"Visualize the Future of AI"**

它想做的不是 AI IDE，而是 **「AI 時代的人類控制台（Human Control Surface）」**。

未來開發流程很可能會變成：AI 在 terminal 裡執行 → 人類負責監督、授權、修正 → UI 負責把 AI 行為可視化。AT.field 正在做這件事。

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
