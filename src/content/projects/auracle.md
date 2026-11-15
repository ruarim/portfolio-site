---
title: "Auracle"
description: "Cross-platform desktop app for private, fully offline semantic audio search."
tags: ["Tauri", "Rust", "React", "TypeScript", "ONNX", "SQLite", "Python"]
featured: true
date: 2026-05-15
githubUrl: https://github.com/ruarim/auracle/
media:
  type: video
  src: https://github.com/user-attachments/assets/df70843a-c824-44e6-b9f9-0fbfe6f9afa4
  alt: Auracle semantic search interface
  # caption: Search a local library using natural language or reference audio.
---

## Project Overview

Auracle is a cross-platform desktop app for semantic audio search to find local sound files by describing them in natural language or by providing example audio. It runs fully offline. The app is built with Tauri and React, with ML inference running on-device with ONNX.

## Key Features

- **Text-to-audio search:** Find files by meaning rather than filename.
- **Query-by-example:** Search using reference audio files alongside text queries.
- **Hybrid search:** Combine text and audio embeddings into a single query.
- **Library analysis:** Add files or folders, track analysis progress, and manage the local library.
- **Built-in playback:** Preview results with a native audio player and a responsive dark/light UI.

## Technical Architecture

- **ML pipeline:** Exported LAION-CLAP audio and text encoders to ONNX, then reimplemented the audio preprocessing pipeline in Rust for parity with the Python model.
- **Local inference:** Runs the models through ONNX Runtime inside the Tauri backend, with no Python required at runtime.
- **Vector search:** Stores embeddings in SQLite using sqlite-vec for fast similarity search.
- **Background processing:** Indexes audio asynchronously and streams progress to the frontend through Tauri events.

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS
- **Backend:** Rust, Tauri, SQLite, sqlite-vec, ONNX
- **ML tooling:** PyTorch, LAION-CLAP, ONNX export

## Engineering Highlights

- Bridged a Python ML pipeline with a native Rust application while preserving audio preprocessing behaviour.
- Designed the end-to-end flow from file ingest and feature extraction through indexed vector storage and semantic retrieval.
- Delivered a polished desktop experience with asynchronous background jobs, live status updates, native file access, and audio playback.

## Current State / Roadmap

The project is a working end-to-end prototype covering indexing, search, and playback. Planned improvements include advanced result filtering, drag-and-drop, broader audio format support.