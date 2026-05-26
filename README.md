# AT.field — AI Terminal Field

> **Expand your AT.field. Visualize the Future of AI.**

AT.field (ATF) is a native macOS three-pane terminal cockpit with built-in visual Sidecar, SSH/Serial connectivity, and MCP Server for AI-assisted development. 100% SwiftUI + AppKit — no Electron.

Stop being blindfolded by oversimplified AI CLI tools (Claude Code, Antigravity CLI, Codex). With AT.field's three-pane layout and visual Sidecar, you orchestrate AI agents directly from the terminal with a human-friendly visual audit layer on the side.

## Screenshot

![AT.field Screenshot](01-app-eula-markdown-sidecar.png)

## Why AT.field?

| | AT.field | Traditional Electron Tools |
|---|----------|---------------------------|
| **Engine** | 100% Native Swift / SwiftUI / AppKit | Chromium / Node.js (Web Wrapper) |
| **Launch Time** | < 0.1s (cold start) | 1.5s ~ 4.0s |
| **Size** | 40~60 MB | 150 MB ~ 400 MB |
| **GPU Rendering** | SwiftTerm (Core Graphics) | WebGL / Web Canvas |
| **Security** | Apple Notarization, fully local | 3rd-party JS plugins, opaque audit |

## Features

### Three-Pane Cockpit Layout (Navigator · Core · Sidecar)

Dynamic three-panel design. Left (Navigator) and Right (Sidecar) collapse with a single shortcut (`Cmd+0` / `Cmd+Opt+0`), freeing maximum space for the Core terminal. Focus any panel with `Cmd+1/2/3`. Development in one window — no more context switching.

### Sidecar Dual Mode: Preview ↔ Edit

The right panel seamlessly toggles between **Preview** (Markdown rendering, image/video/HTML/JSON/PDF) and **Edit** (CodeEditSourceEditor with 40+ language syntax highlighting). Select a file, see it instantly, edit it on the spot — no secondary editor needed.

### "Plan B" Path Magic

Smart regex detects file paths, images, and localhost URLs in terminal output. **Click any path** — the Sidecar renders the result within 1 second. Run `npm run dev`, start any HTTP service, and preview instantly in the built-in WebKit sandbox. Hands never leave the keyboard.

### Full Git Integration

Complete project tree + git diff rendered directly in the Sidecar as colorized previews. No need to switch to a Source Control app.

### SSH & Serial — Unified Connection Hub

Built-in Connections panel manages all SSH hosts and Serial devices (`/dev/tty.*`). System `/usr/bin/ssh` + ControlMaster multiplexing, MFA/SSO/jump-host support, three-tier auth routing. Tab switching **never** drops background SSH or Serial connections — perfect for embedded development and remote servers.

### Split Terminal

`Cmd+D` to split the terminal horizontally. Each pane runs an independent PTY session. Compare output from multiple machines, run commands side-by-side — no extra windows needed.

### Detach & Pin

Drag any tab out of the main window as a floating terminal. Pin it to stay on top across all Spaces — SSH connections or long-running scripts never get buried.

### AI CLI Visual Enhancement (Empower AI CLIs)

Tools like Antigravity, Codex, and Claude Code are often too abstract — developers operate them blind. AT.field lets you dispatch these AI CLIs directly from the terminal while reviewing their output in the Sidecar's visual interface. Click to preview changes, inspect diffs, audit results — dramatically boosting productivity.

### MCP Server

Built-in Unix Domain Socket JSON-RPC server (`/tmp/atf-mcp.sock`). NDJSON framing, up to 3 concurrent connections. 6 Toolkits (Bookmark, Session, SSH, SFTP, Audit). Three-tier permission control (t0 ReadOnly / t1 Write / t2 Sensitive). stdio relay for Claude Desktop, Cursor, and other AI clients.

### CLI & Deep Links

`atf` CLI command for quick file/folder opening. `atfield://open`, `atfield://preview`, `atfield://diff` URL scheme for automation and script integration.

### Smart Drag & Drop

Drag files to terminal — auto-routes by session type: local (`FileManager` copy), SSH (SCP with ZModem fallback), Serial (ZModem). If the file is already in the current directory, inserts the shell-escaped path directly into the command line.

### Finder Services

Right-click "New AI Terminal Field Tab Here" and "New AI Terminal Field Window Here" in macOS Finder.

## System Requirements

- macOS 14.0 (Sonoma) or later
- Apple Silicon or Intel

## Installation

1. Download the latest `.dmg` from [Releases](https://github.com/USERNAME/REPO/releases/latest)
2. Open the `.dmg` and drag `ATF.app` into `Applications`
3. On first launch, right-click → Open (to bypass Gatekeeper once)

## Build from Source

This repository contains only the release binaries. Source code is maintained in a private repository.

## License

See [LICENSE.txt](LICENSE.txt) for details.
