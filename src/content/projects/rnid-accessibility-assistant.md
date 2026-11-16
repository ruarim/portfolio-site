---
title: "RNID Accessibility Assistant"
description: "AI agent for Zoom that helps deaf and hard-of-hearing users advocate for their access needs in real time."
tags: ["TypeScript", "React", "Node.js", "Zoom", "AI", "GCP"]
category: professional
featured: true
date: 2026-01-01
media:
  type: image
  src: /src/media/rnid-data-flow.png
  alt: Data flow diagram
  caption: Data flow from Zoom service to UI alert.

---

## Project Overview

The RNID Accessibility Assistant is an app for Zoom that helps deaf and hard-of-hearing users communicate their access needs and advocates for them during meetings. It was built collaboratively by the Royal National Institute for Deaf People (RNID) and Sonic Baume, funded by Google.org.

Users anonymously declare their needs, and the agent detects barriers in real time and prompts participants or hosts to unmute, fix their camera, take turns, slow down, or spotlight the signer.

## Key Features

- **Anonymous access profiles:** Share needs such as captions, sign language, clear faces, background noise, speech speed, turn-taking, and chat without revealing identity.
- **Noise detection:** Uses voice activity detection and audio-level thresholds to identify background noise and ask users to mute.
- **Face visibility:** Analyses camera frames for face position and visibility so lip-reading is possible.
- **Speech pace and turn-taking:** Monitors words per minute and active-speaker changes to prompt participants to slow down, raise hands, or take turns.
- **Sign-language and chat support:** Prompts hosts to spotlight the signer and uses LLM analysis to surface important chat messages.

## Technical Architecture

- **Layered backend:** Platforms (Zoom adapters), business modules, and core media processing, with strict import boundaries.
- **Zoom integration:** The Zoom App SDK powers the in-meeting sidebar, while Zoom RTMS streams live audio, video, transcripts, and chat over WebSockets.
- **Media pipeline:** Extensible `BaseMediaProcessor` abstraction with per-meeting and per-user state, lazy context loading, packet buffering, and modular video, audio, transcript, speaker, and chat processors.
- **Data and state:** MySQL with Drizzle ORM for persistent data, and Redis for low-latency meeting state, ID mapping, and per-meeting configuration.

## AI & Signal Processing

- **Face analysis:** FaceAPI and TensorFlow.js detect faces and calculate face-area ratios.
- **Audio analysis:** TEN VAD and RMS dB measurement classify voice activity and background noise.
- **LLM reasoning:** Gemini via the Vercel AI SDK analyses messages for chat importance analysis.

## Tech Stack

- **Frontend:** React, Tailwind CSS, shadcn/Radix, Vite
- **Backend:** TypeScript, Node.js, Express, MySQL, Drizzle ORM, Redis
- **AI and infrastructure:** TensorFlow.js, Google Gemini, Pulumi, Google Cloud, Docker, GitHub Actions

## Engineering Highlights

- Designed a platform-agnostic domain layer so Teams or Google Meet support can be added through new adapters.
- Built a modular media pipeline that makes new real-time analyses straightforward to add.
- Preserved privacy through anonymous access-need reporting and throttled, non-disruptive prompts.
- Shipped production infrastructure with Cloud Run, Cloud SQL, Memorystore, TLS, and KMS-managed secrets.
