---
title: "Allpass FDN Reverb"
description: "A stereo algorithmic reverb plugin built from scratch in C++ and JUCE, combining a Hadamard feedback delay network with Schroeder allpass diffusion."
tags: ["C++", "JUCE", "DSP", "VST3", "Audio Plugin", "Real-time audio"]
category: personal
featured: false
date: 2024-04-15
githubUrl: https://github.com/ruarim/allpass-fdn-reverb
media:
  type: video
  src: https://youtu.be/OBex3b7Xd3I
  alt: Demo of the Allpass FDN Reverb plugin
  caption: Demo of the finished plugin and rendered test material.
---

## Project Overview

This project is a stereo algorithmic reverb plugin built in C++ with JUCE and exported as VST3. It implements a feedback delay network (FDN) with four delay lines per channel, Schroeder allpass comb filters for diffusion, and a Hadamard matrix for feedback, taking a reverb design from DSP theory through to a working GUI plugin.

## Technical Highlights

- **Feedback delay network core:** The reverb processes sample-by-sample, combining predelay, input distribution, allpass diffusion, feedback mixing, damping, and output summation.
- **Hadamard feedback matrix:** A Hadamard matrix mixes the delay lines for dense, well-diffused feedback, applied as a vector–matrix multiply.
- **Schroeder allpass diffusion:** First-order allpass comb filters increase echo density futher and smooth the tail.
- **T60-derived damping:** A one-pole lowpass per delay line derives its coefficients from the target decay time.
- **Stereo decorrelation:** Two independent reverb engines use different feedback and allpass delay times for left and right, producing a wide stereo image.
- **Master filtering and mixing:** A JUCE `ProcessorChain` of TPT state-variable high-pass and low-pass filters, followed by a `DryWetMixer` for smooth dry/wet blending.

## Tech Stack

- **Language:** C++
- **Framework:** JUCE
- **DSP:** Custom delay lines, Schroeder allpass filters, Hadamard feedback matrix, one-pole damping, TPT state-variable filters
