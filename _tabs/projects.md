---
layout: page
title: Projects
subtitle: Selected Work & Highlights
icon: fas fa-diagram-project
order: 3
---

A selection of work spanning enterprise architecture, technology transformation, and applied AI engineering.

---
## 🤖 AI RAG Document Assistant
**Personal Project · 2025-2026**

A production-ready Retrieval-Augmented Generation (RAG) application that allows users to ask questions grounded in real documents, either a curated Reserve Bank of New Zealand dataset or their own uploaded PDFs.

The system combines semantic search with large language models to provide contextual, source-backed answers, transforming static documents into an interactive knowledge interface.

**What it does:**
- Queries a curated **Reserve Bank of New Zealand document set**
- Allows users to upload and analyse their own PDFs
- Uses vector search (Qdrant) to retrieve relevant context
- Generates grounded answers with source attribution
- Enforces usage limits to control cost during MVP phase

**Why it matters:** This project demonstrates applied AI engineering beyond experimentation, including vector database integration, prompt design, multi-tenant data isolation, and cost-aware deployment of LLM systems.

### Screenshot

<img src="/assets/img/projects/ai-rag-document-assistant.png"
     alt="AI RAG Document Assistant screenshot"
     style="width: 75%; border-radius: 8px; border: 1px solid #ddd; margin: 12px 0;">

**Tech stack:** Python · Streamlit · Qdrant · OpenAI · Anthropic · Docker · Streamlit Cloud

<div style="margin: 1.2em 0;">
  <a href="https://ai-rag-document-assistant.streamlit.app/" target="_blank"
     style="background: #1a73e8; color: white; padding: 9px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
    🚀 Live App
  </a>
</div>

---

## 🤖 AI Finance Agent NZ
**Personal Project · 2024–2025**

Built an end-to-end AI-powered personal finance tool designed for New Zealand bank data.

The system processes real-world financial CSV exports, uses a **language model agent** to classify transactions intelligently, and generates plain-English financial insights, replacing manual spreadsheet analysis with an adaptive, AI-driven approach.

**What it does:**
- Ingests and normalises CSV exports from any NZ bank format
- Uses a CrewAI **Financial Data Analyst agent** to categorise transactions automatically
- Visualises income vs. spending breakdowns with interactive Plotly charts
- Generates a practical financial summary via a **Financial Coach agent**

**Why it matters:** This project demonstrates applied AI engineering, real data pipeline design, LLM prompt architecture, and end-to-end product deployment, built entirely independently during a sabbatical to maintain and extend technical currency.

### Screenshots

<div style="margin: 1.5em 0; display: flex; gap: 16px; flex-wrap: wrap;">
  <figure style="max-width: 420px; margin: 0;">
    <img src="/assets/img/projects/ai-finance-agent-nz-dashboard.png"
         alt="AI Finance Agent NZ dashboard screenshot"
         style="width: 130%; border-radius: 8px; border: 1px solid #ddd;">
    <figcaption style="font-size: 0.9em; margin-top: 6px;">
      Dashboard showing income and spending breakdowns.
    </figcaption>
  </figure>

  <figure style="max-width: 420px; margin: 0;">
    <img src="/assets/img/projects/ai-finance-agent-nz-summary.png"
         alt="AI Finance Agent NZ financial summary screenshot"
         style="width: 130%; border-radius: 8px; border: 1px solid #ddd;">
    <figcaption style="font-size: 0.9em; margin-top: 6px;">
      AI-generated financial summary and coaching insights.
    </figcaption>
  </figure>
</div>
**Tech stack:** Python · CrewAI · Groq LLM (LLaMA) · Pandas · Streamlit · Plotly · Streamlit Cloud

<div style="margin: 1.5em 0; display: flex; gap: 14px; flex-wrap: wrap;">
  <a href="https://ai-finance-agent-nz.streamlit.app/" target="_blank"
     style="background: #1a73e8; color: white; padding: 9px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
    🚀 Live Demo
  </a>
  <a href="https://github.com/xpto2000/" target="_blank"
     style="background: #333; color: white; padding: 9px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
    📁 GitHub Repo
  </a>
</div>

---

## 🛰️ Orbital Flight Dynamics Simulator

A browser-based high-fidelity physics simulation modelling rocket ascent through atmospheric and orbital phases.

The simulator demonstrates deterministic physics modelling combined with real-time telemetry visualisation, providing an interactive environment to explore aerospace dynamics.

**What it does:**
- Simulates vertical ascent using a 60Hz Newtonian integration loop
- Models fuel burn and mass reduction using **Specific Impulse (Isp)**
- Calculates aerodynamic drag using the standard drag equation with atmospheric density decay
- Validates **Thrust-to-Weight Ratio (TWR)** before launch
- Tracks key milestones such as **Max-Q** and the **Kármán line**
- Displays real-time telemetry using high-performance canvas rendering

**Why it matters:** This project highlights strong fundamentals in physics modelling, simulation design, and performance-oriented front-end engineering — demonstrating the ability to translate complex mathematical systems into interactive, real-time applications.


### Screenshot

<img src="/assets/img/projects/orbital-flight-sim.png"
     alt="AI RAG Document Assistant screenshot"
     style="width: 75%; border-radius: 8px; border: 1px solid #ddd; margin: 12px 0;">

**Tech stack:** JavaScript · HTML5 Canvas · Physics simulation · Real-time data visualisation

<div style="margin: 1.2em 0;">
  <a href="/orbital-flight-sim/" target="_blank"
     style="background: #1a73e8; color: white; padding: 9px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
    🚀 Launch Simulation
  </a>
</div>

---

## Professional Projects 

## ⚡ Vector – Alphabet X Energy Platform
**Solutions Architecture Lead · 2021–2023**

Architected and guided digital platform capabilities for a cutting-edge energy innovation programme in partnership with Google's Alphabet X division.

- Defined the **architecture runway** and critical non-functional requirements (security, resilience, scalability) for New Zealand's electricity digital twin platform
- Designed scalable integration patterns and platform strategy for next-generation energy systems
- Led architecture governance across multi-million-dollar delivery streams
- Bridged business, engineering, and risk stakeholders across a complex multi-party programme

---

## 🔧 Infrastructure Resilience & Modernisation
**Multiple Programmes · 2015–2020**

Led and designed programmes improving reliability, scalability, and long-term operational posture across network, compute, and cloud environments.

Key deliveries:
- Enterprise SAN transformation ($500k+)
- Security uplift and UTM platform refresh ($1M+)
- Redundant network redesign removing critical legacy dependencies
- Resilience upgrades increasing uptime and delivering $2M+ annual OPEX savings

---

## 🚀 Delivery Transformation & Ways of Working

Designed and implemented technology transformation roadmaps, DevOps practices, and operating models aligned to business strategy.

Outcomes:
- ~30% cost optimisation without reducing capability or performance
- Faster delivery cycles with stronger stakeholder alignment
- Improved engineering autonomy and operational visibility

---

## 🧪 Early-Stage Architecture & Startup Advisory
**2023–Present**

Working with startups and small teams to shape early architecture choices, cloud patterns, and delivery foundations — enabling MVP progress without creating long-term technical debt.

Areas covered: AWS, microservices, API design, platform framing, and product architecture.

---

*For a full résumé or portfolio reference, [get in touch](mailto:jesuino.azevedo@gmail.com).*
