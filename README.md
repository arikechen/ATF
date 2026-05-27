# AT.field — AI Terminal Field

> **Expand your AT.field. Visualize the Future of AI.**

## What is AT.field?

It's not a traditional terminal. It's not another Electron IDE.

**AT.field is a native macOS AI terminal cockpit for Claude Code, Codex CLI, Gemini CLI, aider, SSH, Serial ports, Git diffs, localhost preview, and AI Agent workflows.**

Keywords: macOS AI terminal, Claude Code terminal, Codex CLI GUI, AI CLI cockpit, terminal with file preview, SSH manager, Serial port terminal, UART console, localhost preview, Git diff viewer, MCP server, AI agent workflow.

## Screenshot

![AT.field macOS AI terminal cockpit with Sidecar Markdown preview](01-app-eula-markdown-sidecar.png)

Many engineers are already using **Claude Code, Codex CLI, aider, OpenHands, Antigravity, Gemini CLI** — but they all face the same problem.

The core idea is simple:

- **AI CLI (Claude Code, Codex, Antigravity CLI)** does the executing
- **Humans** supervise and review through a visual Sidecar layer
- **Three-pane interface** manages everything at once: file navigation, main terminal, AI result visualization

It solves the biggest pain point of AI CLI tools today: **the CLI is too "blind."**

AI is powerful, but you can only watch scrolling text. You can't quickly:

- See diffs
- Render Markdown
- Open localhost web pages
- View images / PDFs
- Check git changes
- Monitor remote device status

AT.field's answer: **keep the terminal-first workflow, but add a visual Sidecar alongside it.**

## Why pure CLI workflows are not enough

AI CLI tools are excellent for running commands, editing files, launching services, and executing tests. Their limitation is simple: **they are mostly text interfaces.**

When Claude Code, Codex CLI, or another agent tells you it updated a file, generated a report, started a localhost service, or produced a diff, you usually cannot review the result comfortably inside the CLI itself.

For example:

- The agent updates `src/App.swift`
- The agent creates `report.md`
- The agent starts `http://localhost:3000`
- The agent outputs a diff
- The agent creates an image or PDF
- The agent asks you to review git changes

In a pure terminal workflow, you often need extra steps:

- Open files with `cat`, `less`, `vim`, or `nano`
- Use `!` or shell commands to call external tools
- Switch to Finder to locate files
- Switch to a browser for localhost
- Switch to VS Code / Cursor for diffs
- Switch to Preview for images or PDFs
- Switch back to the terminal to continue the AI conversation

None of these steps are hard, but they constantly interrupt the workflow.

The problem is not that AI CLI tools cannot do the work. The problem is that **after the AI does the work, humans need a better place to inspect, verify, and correct the result.**

AT.field adds that layer. When the terminal outputs file paths, localhost URLs, Markdown, images, PDFs, HTML, or diffs, AT.field can open them directly in the right-side Sidecar. You do not need to leave the terminal or keep jumping between Finder, browser, Preview, and VS Code.

This turns AI CLI from a text-only black box into a workflow you can observe and review in real time.

## One place for all terminal work

AT.field is not only for running AI CLI tools. Its goal is to bring the surrounding terminal work engineers do every day into one workspace:

- Local shell
- AI CLI / coding agents
- SSH remote hosts
- Serial port / UART devices
- Localhost web preview
- Markdown / PDF / image / HTML preview
- Git diff and file change review
- Long-running scripts, servers, and log tails
- MCP / automation integration

Usually these jobs are scattered across iTerm2, Finder, VS Code, browser, Preview, SSH config, serial console tools, and git GUIs.

AT.field puts them back into one three-pane interface:

- Left: projects, files, connections, and sessions
- Center: terminal, AI CLI, SSH, and Serial
- Right: output previews, file contents, diffs, localhost pages, and media files

You can run commands, connect to remote machines, inspect AI changes, check localhost, review git diffs, open Markdown reports, and monitor serial logs in the same window.

## SSH and Serial as first-class workflows

Many terminal apps treat SSH as a core feature, but Serial ports are often left to external tools. For embedded, robotics, homelab, and infrastructure work, that is not enough.

In real projects, you may need to:

- SSH into a remote Linux server
- Connect to a Raspberry Pi, Jetson, router, NAS, or dev board
- Watch UART / serial console output through `/dev/tty.*`
- Tail logs while running a local build
- Let an AI CLI modify code while you test on a remote machine
- Drag files into local, SSH, or Serial sessions

AT.field treats SSH and Serial as first-class sessions.

You can manage SSH hosts and Serial devices in the same connection hub. Switching tabs does not drop background connections. You can also detach a session into a floating window and pin it above all Spaces, so long-running logs, deployments, tests, and hardware consoles stay visible.

This makes AT.field not only an AI coding tool, but also a terminal cockpit for day-to-day engineering operations.

### How it differs from Cursor / VS Code

| | AT.field | Cursor / VS Code |
|---|----------|------------------|
| **Architecture** | SwiftUI + AppKit (macOS native) | Electron (Chromium) |
| **UI Engine** | macOS native | Chromium |
| **Launch Speed** | < 0.1s (cold) | 1.5s ~ 4.0s |
| **Memory** | ~40-80 MB baseline | 200-500+ MB baseline |
| **Core Positioning** | AI Terminal Cockpit | IDE |
| **AI Role** | External Agent orchestration | Built-in IDE features |
| **Primary Workflow** | Terminal-first | GUI-first |

This is **not an IDE replacement.**

Think of it more like:

**iTerm2 + tmux + Preview + SSH Manager + MCP Gateway + AI Agent Inspector** — fused into one macOS-native product.

## The Real Core: Sidecar Design

This is the smartest part of the entire product.

When the terminal outputs `./report.md` or `http://localhost:3000`, AT.field automatically recognizes file paths, localhost URLs, images, PDFs, HTML, and diffs — then previews them in the right-side Sidecar instantly.

You never need to:

- `Cmd+Tab` to browser
- Open Finder
- Launch VS Code

The terminal becomes your **command layer** and **orchestration layer** — the Sidecar becomes your **visualization layer**.

This fits perfectly with the AI Agent era: AI executes in the terminal, humans supervise, authorize, and correct through the visual layer. What's dangerous is AI changing things without an observation layer — AT.field gives you that layer.

### What makes this truly powerful

1. **Sidecar is the real core innovation** — It brings visualization into the terminal-first workflow without breaking it
2. **AI CLI enhancement** — You can instantly review AI modifications: see diffs, inspect file contents, track session results. More important than "full automation" is having an **audit layer**
3. **MCP Server** — AT.field isn't just a terminal. It's also **AI tooling infrastructure.** AI can read sessions, manage SSH, operate files, access audit info through MCP. This direction is like an **AI-native operating environment**
4. **SSH + Serial together** — Most terminals only care about SSH. Few treat serial as a first-class feature. Hardware people use both SSH and UART/tty/dev boards — AT.field unifies them

## Features

### Three-Pane Cockpit (Navigator · Core · Sidecar)

Dynamic three-panel design. Left (Navigator) and Right (Sidecar) collapse with a single shortcut (`Cmd+0` / `Cmd+Opt+0`). Core terminal is always visible. Focus any panel with `Cmd+1/2/3`. All development in one window — no more context switching.

### Sidecar: Preview ↔ Edit

Seamlessly toggle between **Preview** (Markdown rendering, image/video/HTML/JSON/PDF) and **Edit** (CodeEditSourceEditor with 40+ language syntax highlighting). Select a file, see it instantly, edit it on the spot.

### Path Magic (Plan B)

Smart regex detects file paths, images, and localhost URLs in terminal output. **Click any path** — the Sidecar renders the result within 1 second. Run `npm run dev`, start any HTTP service, and preview instantly in the built-in WebKit sandbox. Hands never leave the keyboard.

### AI CLI Visual Enhancement

Claude Code, Codex, Antigravity CLI — they all run "blind." AT.field lets you dispatch them from the terminal and inspect output visually in the Sidecar: diffs, file contents, session tracking, audit trails. **You get an observation layer that AI-only workflows desperately need.**

### SSH & Serial (Unified Connection Hub)

One panel to manage all SSH hosts and Serial devices (`/dev/tty.*`). System `/usr/bin/ssh` + ControlMaster multiplexing, MFA/SSO/jump-host support, three-tier auth routing. Tab switching **never** drops background SSH or Serial connections — essential for embedded, robotics, homelab, and infra work.

### Split Terminal

`Cmd+D` to split horizontally. Each pane runs an independent PTY session. Compare outputs, run commands side-by-side — no extra windows.

### Detach & Pin

Drag any tab out as a floating window. Pin it on top across all Spaces — SSH connections and long-running scripts never get buried.

### Git Integration

Project tree + git diff rendered directly in the Sidecar as colorized previews. No need to open a separate Source Control app.

### MCP Server

Built-in Unix Domain Socket JSON-RPC server (`/tmp/atf-mcp.sock`). NDJSON framing, up to 3 concurrent connections. 6 Toolkits (Bookmark, Session, SSH, SFTP, Audit). Three-tier permission control (t0 ReadOnly / t1 Write / t2 Sensitive). stdio relay for Claude Desktop, Cursor, and other AI clients.

### Smart Drag & Drop

Drag files to terminal — auto-routes by session type: local (`FileManager` copy), SSH (SCP with ZModem fallback), Serial (ZModem). If the file is already in the current directory, inserts the shell-escaped path directly into the command line.

### CLI & URL Scheme

`atf` CLI command for quick file/folder opening. `atfield://open`, `atfield://preview`, `atfield://diff` for automation and script integration.

### Finder Services

Right-click "New AI Terminal Field Tab Here" and "New AI Terminal Field Window Here" in macOS Finder.

## Who is it for?

**Great fit:**

- **AI-heavy terminal developers** — If you use Claude Code, Codex CLI, or Agent workflows daily, you'll love it
- **macOS power users** — iTerm2 heavy users, tmux users, keyboard-first workflow players will feel at home
- **Infra / Embedded / Robotics developers** — SSH, serial, split terminal, always-on floating terminal — all done right

**Poor fit:**

- **Windows / Linux users** — macOS native only, no cross-platform direction
- **Traditional GUI IDE users** — If you're used to IntelliJ or Cursor GUI workflow, this isn't GUI-first

## The big picture

AT.field's real mission isn't "another terminal" or "AI IDE."

It's a **Human Control Surface for the AI era.**

The future development workflow will likely be:

- **AI** executes in the terminal
- **Humans** supervise, authorize, and correct
- **UI** visualizes AI behavior

AT.field is building exactly that.

## System Requirements

- macOS 14.0 (Sonoma) or later
- Apple Silicon or Intel

## Installation

1. Download the latest `.dmg` from [Releases](https://github.com/arikechen/ATF/releases)
2. Open the `.dmg` and drag `ATF.app` into `Applications`
3. On first launch, right-click → Open (to bypass Gatekeeper once)

## Build from Source

This repository contains only the release binaries. Source code is maintained in a private repository.

## License

See [LICENSE.txt](LICENSE.txt) for details.
