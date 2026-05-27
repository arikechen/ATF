# AT.field — AI Terminal Field

> **展開你的 AT.field。看見 AI 工作流的未來。**

## AT.field 是什麼？

它不是傳統終端機，也不是另一個 Electron IDE。

**AT.field 是原生 macOS AI 終端控制台，整合 Claude Code、Codex CLI、Gemini CLI、aider、SSH、Serial port、Git diff、localhost preview 與 AI Agent 工作流。**

## 截圖

![AT.field macOS AI 終端控制台與 Sidecar Markdown 預覽](01-app-eula-markdown-sidecar.png)

**Claude Code、Codex CLI、aider、OpenHands、Antigravity、Gemini CLI** 這類 AI CLI 正在變成日常開發工具。它們可以在 terminal 裡改檔案、跑指令、產生報告、啟動 localhost 服務，也可以輸出 diff。

問題是，AI 做完事情之後，你通常還是得離開 terminal 才能檢查結果。

AT.field 保留 AI CLI 在 terminal 裡執行的工作流，但在旁邊加上一層視覺化審查介面：

- **中間：** 執行 shell、AI CLI、SSH 或 Serial session
- **左側：** 瀏覽檔案、專案、連線與 session
- **右側 Sidecar：** 預覽檔案、diff、Markdown、圖片、PDF 與 localhost 頁面

核心概念很簡單：**AI 在 terminal 裡執行，人類用視覺方式審查結果。**

這正是在解決目前 AI CLI 最大的痛點：**CLI 太「盲」。** AI 很強，但你常常只能看滾動文字，很難快速：

- 看 diff
- 看 Markdown
- 看 localhost 網頁
- 看圖片 / PDF
- 看 git 變更
- 看遠端裝置狀態

AT.field 的想法是：**保留 terminal-first 的工作流，但讓結果直接在同一個視窗裡可見。**

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
| **記憶體** | ~80-100 MB 基準 | 200-500+ MB 基準 |
| **核心定位** | AI Terminal Cockpit | IDE |
| **AI 角色** | 外部 Agent 調度 | IDE 內建功能 |
| **操作核心** | Terminal-first | GUI-first |

它不是 IDE replacement。更像是：

**iTerm2 + tmux + Preview + SSH Manager + MCP Gateway + AI Agent Inspector** — 融合後的 macOS 原生產品。

## 真正的核心：Sidecar 設計

這是整個產品最聰明的地方。

當終端輸出 `./report.md` 或 `http://localhost:3000`，AT.field 會自動辨識檔案路徑、localhost URL、圖片、PDF、HTML、diff，然後直接在右側 Sidecar 預覽。

你再也不用：

- Cmd+Tab 開瀏覽器
- 開 Finder
- 開 VSCode

終端本身變成 **command layer** 和 **orchestration layer**，Sidecar 變成 **visualization layer**。

這很符合 AI Agent 時代的工作方式：AI 在終端裡執行，人類透過視覺層監督、授權、修正。**真正危險的是 AI 改了東西，但你沒有觀察層** — AT.field 給你這個觀察層。

## 功能特色

| 功能 | 說明 |
|---|---|
| **三欄式控制台** | Navigator、terminal、Sidecar 在同一個視窗中協作。 |
| **Sidecar 預覽 / 編輯** | 預覽 Markdown、圖片、影片、HTML、JSON、PDF，也能編輯原始碼並支援語法高亮。 |
| **終端輸出偵測** | 從 terminal output 偵測檔案路徑、localhost URL、圖片、PDF、HTML、diff，並在 Sidecar 開啟。 |
| **SSH & Serial 中心** | 將 SSH host 與 Serial device（`/dev/tty.*`）當成同一級 session 管理，切換 tab 不會中斷背景連線。 |
| **分割 / 浮動 / 釘選** | 分割 terminal pane、將 tab 拖出成浮動視窗，並釘在所有 Spaces 上方。 |
| **Git 整合** | 在 Sidecar 中查看專案檔案與 git diff。 |
| **MCP Server** | 內建 Unix Domain Socket JSON-RPC server，供 AI client 與 automation 使用。 |
| **Finder 服務** | 從 Finder 右鍵直接開啟 AT.field tab 或 window。 |

## 系統需求

- macOS 14.0（Sonoma）或以上
- Apple Silicon 或 Intel

## 安裝方式

1. 從 [Releases](https://github.com/arikechen/ATF/releases) 下載最新 `.dmg`
2. 開啟 `.dmg`，將 `ATF.app` 拖進 `Applications`
3. 首次開啟請右鍵 → 打開（繞過 Gatekeeper 一次）

## 原始碼

本倉庫僅包含 Release 二進位檔，原始碼維護於私有倉庫。

## 關鍵字

macOS AI 終端機、Claude Code 終端機、Codex CLI GUI、AI CLI 控制台、具有檔案預覽的終端機、SSH 管理器、串列終端機、UART 控制台、本地主機預覽、Git diff 檢視器、MCP 伺服器、AI 代理程式工作流程。

## 授權

詳見 [LICENSE.txt](LICENSE.txt)。
