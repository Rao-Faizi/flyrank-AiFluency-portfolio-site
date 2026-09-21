# 🚀 Muhammad Faizan | Business Automation & AI Engineer Portfolio

Welcome to the source code for my professional portfolio! This repository serves as my capstone project for the **FlyRank AI Fluency** track, demonstrating my ability to build, harden, and launch production-ready web applications with integrated AI workflows.

**Live Site:** [faizan-ai.com](https://portfolio-site-vert-two-93.vercel.app/) *(Note: Swap with final custom domain)*

---

## 📖 What It Does & For Whom

This portfolio is designed for **employers, clients, and technical reviewers** who need to quickly evaluate my competency in Business Automation and AI Engineering. 

It intentionally steps away from generic side-projects and instead focuses on **high-value business automation**. The site clearly outlines the Problem, Solution, and Impact (STAR method) of my featured workflows, including **SalesScript AI** and **N8N Data Sync Workflows**. It is built to answer two questions within 10 seconds: *What do I do, and am I good at it?*

---

## 🏗️ Architecture Sketch

The application is built on a modern, high-performance frontend stack, emphasizing speed, accessibility, and clean design.

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Utility-first, responsive design, dark-mode styling)
*   **Forms & API:** Web3Forms (Serverless form submissions without backend overhead)
*   **Deployment & Analytics:** Vercel (Edge network deployment with native `@vercel/analytics`)

---

## 🛠️ Local Setup & Reproduction

A stranger can clone and run this repository in under 2 minutes. No external databases or complex environment variables are required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rao-Faizi/flyrank-AiFluency-portfolio-site.git
   cd flyrank-AiFluency-portfolio-site
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install / pnpm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **View the site:**
   Open `http://localhost:3000` in your browser.

---

## 🕵️‍♂️ V2 Eval Results & Limitations (QA Audit)

As part of the FL-18 Hardening phase, I conducted a rigorous "Break Your Own Site" audit. Knowing exactly where your software breaks is the hallmark of professional diligence.

### Fix-Nows (Addressed)
*   **Double Submissions:** The contact form allowed rapid double-clicking, resulting in duplicate emails. *Fix:* Implemented an `isSubmitting` state that explicitly disables the button and provides a loading spinner during the network request.
*   **Contrast Accessibility:** The original tech-stack text failed WCAG contrast ratios. *Fix:* Updated the hero section to use a dark frosted glass overlay and high-contrast blue text.

### Known Limitations (Honest Disclosure)
*   **Spam Prevention:** The contact form currently relies entirely on HTML5 client-side validation (`type="email"`, `required`). A malicious user could bypass the browser UI and hit the Web3Forms API directly. Implementing a robust backend reCAPTCHA or honeypot is outside the scope of a static V1 portfolio but is a documented limitation.
*   **Demo Links:** The "Live Demo" and "GitHub Repo" links on the Case Studies are currently disabled (`cursor-not-allowed`) because the backend systems for those specific enterprise workflows cannot be publicly exposed.

---

## 🤖 Transparency Note: AI as a Career Partner

In adherence to the AI Fluency framework, I want to be entirely transparent about how this site was built: **I built this application alongside Antigravity (Google's Agentic AI).**

Instead of using a drag-and-drop website builder (like Wix or Squarespace), I acted as the Lead Engineer, directing Antigravity to write the Next.js boilerplate, refactor the Tailwind CSS for accessibility, and implement the Web3Forms integration. I reviewed all generated code, conducted the QA audits, and made the strategic decisions regarding the architecture, copywriting, and layout. 

Using AI as a pair-programming partner allowed me to ship a production-grade application significantly faster, which is exactly the skill I bring to my clients.

---

## 🗂️ Track Deliverables Index

Here are the links to the core documentation and checkpoints from my FlyRank AI Fluency track:

*   **[FL-17 Survive the Crit (Design Sort)](./FL-17-Crit-Sort.md)**
*   **[FL-18 Break Your Own Site (QA Audit)](./FL-18-QA-Audit.md)**
*   **[FL-10 Retrospective](./FL-10-Retrospective.md)**
*   **[FL-09 Live Demo Video (YouTube/Loom Link)](#)** *(Insert Link Here)*
