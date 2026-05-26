# AT.field — AI Terminal Field

> **Expand your AT.field. Visualize the Future of AI.**

AT.field（ATF）は、世界初のAIネイティブ「絶対領域」開発コックピット — 100% SwiftUI + AppKit で構築されたネイティブmacOSスリーペインツールです。ターミナル、コード編集、SSH/Serial接続、インテリジェントなSidecarプレビューエンジンを1つの没入型ワークスペースに統合します。

過度に簡略化され、詳細が見えないAI CLIツール（Claude Code、Antigravity CLI、Codex）に制限される必要はもうありません。AT.fieldの3ペインレイアウトとビジュアルSidecarにより、ターミナルから直接AIエージェントを orchestrate し、人間に優しいビジュアル監査レイヤーを手に入れましょう。

## スクリーンショット

![AT.field スクリーンショット](01-app-eula-markdown-sidecar.png)

## AT.field を選ぶ理由

| | AT.field | Electron系（VS Code、Cursor、Obsidian…）|
|---|----------|----------------------------------------|
| **プラットフォーム** | macOSネイティブ限定 | クロスプラットフォーム（Chromiumラッパー）|
| **エンジン** | 100% Swift / SwiftUI / AppKit | Chromium + Node.js |
| **起動** | < 0.1秒（コールド） | 1.5秒 ~ 4.0秒 |
| **サイズ** | 40~60 MB | 150 MB ~ 400 MB |
| **メモリ** | ~40-80 MB ベース | 200-500+ MB ベース |
| **レンダリング** | Core Graphics（ネイティブ） | WebGL / Web Canvas |
| **セキュリティ** | Apple Notarization公証、完全ローカル実行 | サードパーティJSプラグイン |

## 機能

### スリーペーンコックピット（Navigator · Core · Sidecar）

動的3ペイン設計。左ペイン（Navigator）と右ペイン（Sidecar）はショートカット一発で瞬時に収納可能（`Cmd+0` / `Cmd+Opt+0`）、コアターミナルに最大の画面領域を確保。`Cmd+1/2/3` で各ペインにフォーカス。開発はすべて1つのウィンドウで完結 — コンテキストスイッチはもう不要です。

### Sidecar デュアルモード：Preview ↔ Edit

右Sidecarは **Preview（プレビュー）** と **Edit（編集）** をワンクリックで切替。Markdownのリアルタイムレンダリング、画像/動画/HTML/JSON/PDFプレビュー、40+言語のコードシンタックスハイライト編集をサポート。ファイルを選んですぐに表示、すぐに編集 — 別のエディタを開く必要はありません。

### 「プランB」パスマジック

スマートRegexがターミナル出力内のファイルパス、画像、localhost URLを検出。**パスをクリックするだけ**で — 右Sidecarが1秒以内に結果をレンダリング。`npm run dev` の実行やHTTPサービスの起動後、内蔵WebKitサンドボックスで即座にプレビュー。キーボードから手を離す必要はありません。

### 完全なGit統合

プロジェクトツリー全体 + git diff の結果をカラー化された差分プレビューとしてSidecarに直接レンダリング。ソース管理アプリに切り替える必要はありません。

### SSH & Serial — 統合接続ハブ

内蔵Connectionsパネルで全てのSSHホストとシリアルデバイス（`/dev/tty.*`）を一元管理。システム `/usr/bin/ssh` + ControlMaster多重化、MFA/SSO/踏み台対応、3層認証ルーティング。**タブを切り替えても** バックグラウンドのSSHやSerial接続は**決して切断されません** — 組込開発とリモートサーバーを1つのアプリで完全管理。

### 分割ターミナル

`⌘D` でターミナルを水平分割。各ペインは独立したPTYセッションを実行。複数マシンの出力を比較したり、異なるコマンドを並行実行 — 追加ウィンドウは不要です。

### 分離＆ピン留め

任意のタブをメインウィンドウからドラッグアウトしてフローティングターミナルに。ピン留めすれば全Spaceの最前面に固定 — SSH接続や長時間実行スクリプトが他のウィンドウに埋もれることはありません。

### AI CLI ビジュアル強化

Antigravity、Codex、Claude CodeなどのCLIツールは抽象的すぎることが多く、開発者は盲目的に実行するしかありません。AT.fieldでは、これらのAI CLIをターミナルから直接 dispatch し、その出力をSidecarのビジュアルインターフェースでレビューできます。クリック一つで変更をプレビュー、差分を検査、結果を監査 — 生産性が劇的に向上します。

### MCP Server

内蔵Unix Domain Socket JSON-RPCサーバー（`/tmp/atf-mcp.sock`）。NDJSONフレーミング、最大3同時接続。6つのToolkit（Bookmark、Session、SSH、SFTP、Audit）。3段階権限制御（t0 ReadOnly / t1 Write / t2 Sensitive）。Claude Desktop、Cursor等のAI Clientと直接連携可能なstdioリレー。

### CLI & ディープリンク

`atf` CLIコマンドでファイル/フォルダを素早く開く。`atfield://open`、`atfield://preview`、`atfield://diff` URLスキームで自動化とスクリプト連携をサポート。

### スマートドラッグ＆ドロップ

ファイルをターミナルにドラッグすると、セッションタイプに応じて自動ルーティング — ローカルは `FileManager` コピー、SSHはSCP（失敗時ZModemフォールバック）、シリアルはZModem。ファイルが既にカレントディレクトリにある場合は、shell-escapeされたパスを直接コマンドラインに挿入。

### Finderサービス

Finder右クリックメニュー「New AI Terminal Field Tab Here」「New AI Terminal Field Window Here」。

## システム要件

- macOS 14.0（Sonoma）以降
- Apple Silicon または Intel

## インストール

1. [Releases](https://github.com/arikechen/ATF/releases) から最新の `.dmg` をダウンロード
2. `.dmg` を開き、`ATF.app` を `Applications` にドラッグ
3. 初回起動時は右クリック → 開く（Gatekeeperを一度だけバイパス）

## ソースコード

このリポジトリにはリリースバイナリのみが含まれています。ソースコードはプライベートリポジトリで管理されています。

## ライセンス

詳細は [LICENSE.txt](LICENSE.txt) をご覧ください。
