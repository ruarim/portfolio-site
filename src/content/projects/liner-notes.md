---
title: "Liner Notes"
description: "A full-stack music research app that turns whatever you're listening to on Spotify into rich, musicological liner notes, generated with Gemini and live web search."
tags: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "AI", "SSE", "Docker", "GCP"]
category: personal
featured: false
date: 2026-02-16
githubUrl: https://github.com/ruarim/liner-notes
media:
  type: image
  src: https://github.com/user-attachments/assets/99edcb9a-e64c-427d-bee6-48043ece9339
  alt: Liner Notes UI
  caption: Web app interface
---

## Project Overview

Streaming gives you the music but strips away the context physical liner notes once provided: personnel, studios, scene, critical reception, and where to listen next. Liner Notes restores that context on demand. It connects to a user's Spotify account and uses Google Gemini with live web search to generate liner notes for the track they are playing.


## Key Features

- **Spotify integration:** OAuth sign-in, now-playing and recently played tracks, plus per-track metadata.
- **Track research:** Five written sections covering the key context, alongside recommendation for related albums, tracks, books, and films/TV.
- **Incremental generation:** When an analysis is incomplete, only the missing sections are requested, avoiding redundant token spend.
- **Real-time updates:** Server-Sent Events push completed analyses without polling.
- **Shared caching:** Analyses are stored per track in MongoDB and reused across users.
- **Related-tracks graph:** An interactive React Flow and Dagre graph connects tracks by shared tags in a resizable side panel.

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Radix UI, Lucide, React Flow, Dagre
- **Backend:** Node.js, Express, TypeScript, MongoDB
- **AI:** Vercel AI SDK, Google Gemini, Zod
- **Auth and real-time:** Spotify OAuth, JWT session cookies, Server-Sent Events
- **Infrastructure:** Docker, Docker Compose, GitHub Actions, Google Cloud Run
