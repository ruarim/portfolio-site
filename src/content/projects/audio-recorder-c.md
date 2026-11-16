---
title: "audio-recorder-c"
description: "A small macOS audio recorder written in C on CoreAudio and AudioToolbox."
tags: ["C", "macOS", "CoreAudio", "AudioToolbox", "Real-time audio"]
category: personal
featured: false
date: 2026-08-13
githubUrl: https://github.com/ruarim/audio-recorder-c
---

## Project Overview

A compact macOS recorder built on Apple's AudioToolbox and CoreAudio frameworks, with no third-party libraries. It captures microphone input through an AudioQueue and writes WAV audio to a file, all behind an opaque C API.

## Technical Highlights

- **Real-time capture pipeline:** A configurable pool of pre-allocated AudioQueue buffers is continuously drained to disk and re-enqueued from the input callback, while keeping async file writes off the critical path.
- **Systems-level C design:** Implementation details are hidden behind an opaque `audio_recorder` handle, with a config struct controlling sample rate, channels, buffer count and buffer length, and errors propagated as `OSStatus`.
- **Clean lifecycle and failure handling:** Centralized creation and teardown, so partial setup reliably releases the audio queue, file handle and owned path string.
