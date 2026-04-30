---
layout: page
title: Architecture Case Study
subtitle: How This Website Is Built
icon: fas fa-gears
order: 4
---

### Building a Modern, Secure and Simple Website

*This page explains the architecture and design decisions behind the platform.*

When building this personal website, I intentionally chose a **simple but resilient architecture**.

Rather than relying on complex infrastructure, servers, or databases — which often introduce unnecessary operational overhead — I opted for an approach focused on **simplicity, reliability, and security**.

The design prioritises:

- **Security**
- **Reliability**
- **Minimal maintenance**
- **Simplicity**
- **Zero infrastructure cost**

This approach is widely used for **documentation platforms, technical blogs, and developer portfolios**, and demonstrates how effective solutions often come from **reducing complexity rather than adding it**.

---

## High-Level Architecture

<p align="center">
  <img src="/assets/img/diagram1.jpg" alt="High-Level Architecture" width="800">
</p>
<p align="center"><em>Static website hosted on GitHub Pages and distributed globally via CDN</em></p>

Users access a static website served through GitHub Pages, which handles global distribution via CDN.  
There are no application servers or databases — only pre-built static content.

---

## Content and Build Structure

<div style="text-align:center; margin: 20px 0;">
  <img src="/assets/img/diagram3.jpg" alt="Content Structure" style="max-height:400px; width:auto; display:block; margin:0 auto;">
  <p style="margin-top:10px; color:gray;"><em>Jekyll transforms Markdown into static HTML</em></p>
</div>

Content is written in Markdown and organised into pages.  
During the build process, **Jekyll converts this content into static HTML**, applying layouts and structure.

This allows content to remain simple and maintainable while producing a fully functional website.

---

## Development and Publishing Workflow

<div style="text-align:center; margin: 20px 0;">
  <img src="/assets/img/diagram2.jpg" alt="Publishing Workflow" style="max-height:500px; width:auto; display:block; margin:0 auto;">
  <p style="margin-top:10px; color:gray;"><em>Local development, Git-based versioning, and automated deployment</em></p>
</div>

The workflow is intentionally simple:

- The site can be run locally using Jekyll for preview and validation  
- Changes are committed and pushed to GitHub  
- **GitHub Pages runs the Jekyll build process automatically**  
- Static files are generated and deployed to the live site  

At runtime, there is no Jekyll involved — only static files served to users.

---

## Technology Components

The platform relies on a small set of well-established technologies:

- **Jekyll** – static site generator (used during build)  
- **GitHub Pages** – hosting, build pipeline, and CDN  
- **GitHub** – source control and publishing workflow  
- **Markdown** – content authoring  
- **HTML / CSS** – presentation layer  

Together these components form a **simple and robust platform with no servers to manage**.

---

## Why This Architecture Works Well

This model provides several advantages:

**Security**  
No running application servers, databases, or APIs significantly reduce the attack surface.

**Reliability**  
GitHub Pages distributes the site globally via CDN.

**Operational Simplicity**  
Publishing is Git-based — no deployments or infrastructure management required.

**Cost Efficiency**  
The platform operates with **zero hosting cost**.

---

## Reusing This Architecture

**The full source code for this website is available on GitHub.**

This project also serves as a **practical example of applying architectural thinking to a real system**, even at a small scale.

You can explore the repository to:

- understand the architectural decisions  
- see how static-site architectures remove operational complexity  
- reuse the structure for your own site  
- learn how to publish using GitHub Pages  

**Source code:**  
<https://github.com/xpto2000/my-mainsite>

---

## Final Thoughts

Sometimes the best architecture is the **simplest one that fits the problem well**.

Although much of my career has involved working with large and complex enterprise environments, I still enjoy examples like this. Building a small solution that is **clean, resilient, and fit for purpose** reflects what good architecture should aim for.

Regardless of scale, systems benefit from **clear thinking, pragmatic design, and thoughtful architectural decisions**.

---

## Let’s Connect

If you are interested in discussing **architecture, platform design, or technology strategy**, feel free to connect.

- **LinkedIn:**  
  <https://www.linkedin.com/in/jesuinoazevedo/>

- **Email:**  
  <mailto:jesuino.azevedo@gmail.com>