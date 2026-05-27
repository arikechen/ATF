# AT.field — AI Terminal Field

> **AT.field を広げる。AI ワークフローの未来を可視化する。**

## AT.field とは？

従来のターミナルではありません。また別の Electron IDE でもありません。

**AT.field は、Claude Code、Codex CLI、Gemini CLI、aider、SSH、Serial port、Git diff、localhost preview、AI Agent ワークフローを統合する macOS ネイティブ AI terminal cockpit です。**

## スクリーンショット

![AT.field macOS AI terminal cockpit と Sidecar Markdown preview](01-app-eula-markdown-sidecar.png)

**Claude Code、Codex CLI、aider、OpenHands、Antigravity、Gemini CLI** のような AI CLI は、日常的な開発ツールになりつつあります。ターミナル内でファイルを編集し、コマンドを実行し、レポートを生成し、localhost サービスを起動し、diff を出力できます。

問題は、その作業が終わったあとです。通常の CLI では、結果を確認するためにターミナルから離れる必要があります。

AT.field は AI CLI を terminal で実行するワークフローを保ちつつ、その横に視覚的なレビュー層を追加します：

- **中央：** shell、AI CLI、SSH、Serial session を実行
- **左側：** ファイル、プロジェクト、接続、session を閲覧
- **右側 Sidecar：** ファイル、diff、Markdown、画像、PDF、localhost ページを preview

核心はシンプルです：**AI は terminal で実行し、人間は結果を視覚的にレビューします。**

これは AI CLI ツールの最大の痛点を解決します：**CLI が「盲目的」すぎる。** AI は強力ですが、多くの場合スクロールするテキストを見るしかありません。以下のことを素早く行えません：

- diff を見る
- Markdown を表示する
- localhost ページを開く
- 画像/PDF を表示する
- git 変更を確認する
- リモート機器の状態を確認する

AT.field の答え：**terminal-first のワークフローを維持しつつ、結果を同じウィンドウ内で見えるようにする。**

## なぜ純粋な CLI ワークフローだけでは足りないのか？

AI CLI は、コマンド実行、ファイル編集、テスト実行、サービス起動に非常に向いています。しかし明確な制約があります：**基本的にはテキストインターフェースであることです。**

Claude Code、Codex CLI、または他の agent がターミナル内で「ファイルを更新した」「レポートを生成した」「localhost サービスを起動した」「diff を出力した」と伝えてきても、その結果を CLI の中だけで快適に確認するのは簡単ではありません。

例えば：

- agent が `src/App.swift` を更新する
- agent が `report.md` を生成する
- agent が `http://localhost:3000` を起動する
- agent が diff を出力する
- agent が画像や PDF を作成する
- agent が git 変更の確認を求める

純粋な terminal ワークフローでは、通常さらに多くの操作が必要になります：

- `cat`、`less`、`vim`、`nano` でファイルを開く
- `!` や shell コマンドで外部ツールを呼び出す
- Finder に切り替えてファイルを探す
- ブラウザに切り替えて localhost を開く
- VS Code / Cursor に切り替えて diff を見る
- Preview に切り替えて画像や PDF を見る
- もう一度 terminal に戻って AI との対話を続ける

これらの操作自体は難しくありません。しかし、ワークフローを何度も中断します。

AI CLI の問題は「作業ができない」ことではありません。問題は、**AI が作業を終えたあと、人間が同じ場所で結果を素早く理解し、確認し、修正しにくいことです。**

AT.field はこの層を補います。terminal にファイルパス、localhost URL、Markdown、画像、PDF、HTML、diff が出てきたとき、AT.field はそれらを右側の Sidecar で直接開けます。terminal から離れたり、Finder、ブラウザ、Preview、VS Code の間を何度も行き来したりする必要はありません。

これにより、AI CLI は「テキストだけを出力するブラックボックス」ではなく、リアルタイムに観察・レビューできるワークフローになります。

## すべての terminal 作業を一つの場所で

AT.field は AI CLI を実行するためだけのツールではありません。エンジニアが日常的に terminal 周辺で行う作業を、一つのワークスペースにまとめることを目指しています：

- ローカル shell
- AI CLI / coding agent
- SSH リモートホスト
- Serial port / UART デバイス
- localhost web preview
- Markdown / PDF / image / HTML preview
- Git diff とファイル変更レビュー
- 長時間実行される script、server、log tail
- MCP / automation integration

通常、これらの作業は iTerm2、Finder、VS Code、ブラウザ、Preview、SSH config、serial console ツール、git GUI などに分散しています。

AT.field はそれらを一つの3ペインインターフェースに戻します：

- 左：プロジェクト、ファイル、接続、session を管理
- 中央：terminal、AI CLI、SSH、Serial を実行
- 右：出力プレビュー、ファイル内容、diff、localhost ページ、メディアファイルを表示

同じウィンドウ内で、コマンド実行、リモートマシン接続、AI の変更確認、localhost 確認、git diff レビュー、Markdown レポート表示、serial log 監視を行えます。

## SSH と Serial を第一級ワークフローとして扱う

多くの terminal app は SSH を主要機能として扱いますが、Serial port は外部ツール任せになりがちです。embedded、robotics、homelab、infrastructure の作業では、それだけでは不十分です。

実際のプロジェクトでは、次のような作業が同時に必要になることがあります：

- リモート Linux server に SSH する
- Raspberry Pi、Jetson、router、NAS、dev board に接続する
- `/dev/tty.*` 経由で UART / serial console 出力を見る
- ローカル build を実行しながら log を tail する
- AI CLI にコードを修正させながら、リモートマシンでテストする
- ローカル、SSH、Serial session にファイルをドラッグする

AT.field は SSH と Serial を同じレベルの session として扱います。

同じ接続ハブで SSH host と Serial device を管理できます。tab を切り替えてもバックグラウンド接続は切断されません。session をフローティングウィンドウとして分離し、すべての Spaces の上にピン留めすることもできます。長時間の log、deploy、test、hardware console を常に見える場所に置いておけます。

これにより、AT.field は AI coding tool であるだけでなく、日常的なエンジニアリング運用のための terminal cockpit にもなります。

### Cursor / VS Code との違い

| | AT.field | Cursor / VS Code |
|---|----------|------------------|
| **アーキテクチャ** | SwiftUI + AppKit（macOSネイティブ） | Electron（Chromium） |
| **UI エンジン** | macOS ネイティブ | Chromium |
| **起動速度** | < 0.1秒（コールド） | 1.5秒 ~ 4.0秒 |
| **メモリ** | ~80-100 MB ベース | 200-500+ MB ベース |
| **核心ポジション** | AI Terminal Cockpit | IDE |
| **AI の役割** | 外部Agentオーケストレーション | IDE内蔵機能 |
| **操作の中心** | Terminal-first | GUI-first |

これは **IDE の置き換えではありません。**

むしろ次のようなイメージです：

**iTerm2 + tmux + Preview + SSH Manager + MCP Gateway + AI Agent Inspector** — を融合した macOS ネイティブプロダクト。

## 本当の核心：Sidecar デザイン

これが製品全体で最も賢い部分です。

ターミナルが `./report.md` や `http://localhost:3000` を出力すると、AT.field は自動的にファイルパス、localhost URL、画像、PDF、HTML、diff を検出し、右側の Sidecar で即座にプレビューします。

もう以下のことは必要ありません：

- Cmd+Tab でブラウザに切り替え
- Finder を開く
- VSCode を起動

ターミナルは **command layer** と **orchestration layer** に、Sidecar は **visualization layer** になります。

これは AI Agent 時代のワークフローに完全に適合します：AI がターミナルで実行し、人間がビジュアルレイヤーで監督・承認・修正します。**本当に危険なのは、AI が変更を加えても観察層がないことです** — AT.field がその観察層を提供します。

## 機能

| 機能 | 内容 |
|---|---|
| **3ペインコックピット** | Navigator、terminal、Sidecar を一つのウィンドウで扱えます。 |
| **Sidecar preview / edit** | Markdown、画像、動画、HTML、JSON、PDF を preview し、syntax highlighting 付きでソース編集できます。 |
| **terminal output detection** | terminal output からファイルパス、localhost URL、画像、PDF、HTML、diff を検出し、Sidecar で開きます。 |
| **SSH & Serial hub** | SSH host と Serial device（`/dev/tty.*`）を同じレベルの session として管理し、tab 切替でも背景接続を維持します。 |
| **split / detach / pin** | terminal pane を分割し、tab をフローティングウィンドウ化して全 Spaces の上にピン留めできます。 |
| **Git integration** | Sidecar でプロジェクトファイルと git diff を確認できます。 |
| **MCP Server** | AI client と automation 向けの Unix Domain Socket JSON-RPC server を内蔵。 |
| **Finder Services** | Finder のコンテキストメニューから AT.field tab / window を開けます。 |

## システム要件

- macOS 14.0（Sonoma）以降
- Apple Silicon または Intel

## インストール

1. [Releases](https://github.com/arikechen/ATF/releases) から最新の `.dmg` をダウンロード
2. `.dmg` を開き、`ATF.app` を `Applications` にドラッグ
3. 初回起動時は右クリック → 開く（Gatekeeperを一度だけバイパス）

## ソースコード

このリポジトリにはリリースバイナリのみが含まれています。ソースコードはプライベートリポジトリで管理されています。

## キーワード

macOS AI terminal、Claude Code terminal、Codex CLI GUI、AI CLI cockpit、file preview 付き terminal、SSH manager、Serial port terminal、UART console、localhost preview、Git diff viewer、MCP server、AI agent workflow。

## ライセンス

詳細は [LICENSE.txt](LICENSE.txt) をご覧ください。
