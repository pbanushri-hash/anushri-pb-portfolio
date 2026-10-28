# Anushri P.B. — Developer Portfolio

A responsive, personal developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**. Designed specifically for software engineering, AI, and cloud internship applications, showcasing academic credentials, featured projects, verified repositories, achievements, and curriculum vitae.

---

## 🌟 Overview

- **Name:** Anushri P.B.
- **Role:** Aspiring Software Developer | AI Enthusiast | CSE Student
- **Institution:** SNS College of Technology, Coimbatore
- **Academic Standing:** 8.95 CGPA (Batch 2025–2029, Second Year)
- **GitHub:** [https://github.com/pbanushri-hash](https://github.com/pbanushri-hash)
- **LinkedIn:** [https://www.linkedin.com/in/anushri-p-b-cse/](https://www.linkedin.com/in/anushri-p-b-cse/)
- **Email:** [anushriponnusamy@gmail.com](mailto:anushriponnusamy@gmail.com)

---

## 🚀 Key Features

1. **Lavender & White Color Palette:** Tailored light theme featuring soft lavender accents, deep purple interactive elements, and dark charcoal typography with accessible WCAG AA contrast.
2. **Comprehensive Sections:**
   - **Hero:** Quick introduction, headline, academic statistics, and 5 direct action buttons (Projects, View Resume, Download Resume, GitHub, LinkedIn).
   - **About Me:** Academic credentials, SNS College of Technology, CGPA 8.95, 2029 graduation timeline, and career objectives.
   - **Technical Skills:** Categorized competencies across Programming (Python, JavaScript, TypeScript, C#), Web Development, 3D Development (Unity), and Core AI/Cloud tools.
   - **Projects:** 4 featured engineering projects with verified GitHub repositories, architecture modal, and filter controls:
     - *ResourceX*: AI-Powered B2B Circular Marketplace for Surplus Business Resources
     - *MediFlow AI*: Hospital Intake, Patient Flow & Navigation System
     - *3D Virtual Classroom / 3D Webinar (EduSphere)*: Interactive Unity & C# Learning Environment (First Prize DT Project Expo)
     - *Cold Forge Game*: Web Game Logic Engine
   - **Achievements:** First Prize recognition at the DT Project Expo (EduSphere / 3D Virtual Classroom) and Third Prize at the NOVA 360 Project Expo.
   - **Internship:** Cloud Computing Intern at Brainery Spot Technology, Coimbatore.
   - **Certifications:** 5 verified credentials from Scaler Topics, IBM SkillsBuild, and Tata Group × Forage.
   - **Resume Preview & Download:** Embedded PDF viewer with live browser testing fallback, direct new-tab link (`/resume.pdf`), and automatic download button (`Anushri_PB_Resume.pdf`).
   - **Direct Contact:** Native `mailto:` communication with recruiter subject presets and verified social handles.
   - **In-App Deployment Guide:** Interactive modal with quick copy terminal commands for Git, GitHub, and Vercel.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **SEO & Social Cards:** OpenGraph, Twitter Cards, and Schema.org JSON-LD Person schema

---

## 📁 Project Structure

```text
├── public/
│   └── resume.pdf                 # Active resume PDF (delivered at /resume.pdf)
├── src/
│   ├── components/
│   │   ├── About.tsx              # Education & career objectives
│   │   ├── Achievements.tsx       # DT Project Expo award showcase
│   │   ├── Certifications.tsx     # 5 industry certifications
│   │   ├── Contact.tsx            # Contact links & email subject presets
│   │   ├── DeploymentGuideModal.tsx # In-app GitHub & Vercel deployment modal
│   │   ├── Experience.tsx         # Cloud computing internship
│   │   ├── Footer.tsx             # Copyright & social navigation
│   │   ├── Hero.tsx               # Hero headline, actions, & profile placeholder
│   │   ├── Navbar.tsx             # 3-zone sticky navigation bar
│   │   ├── Projects.tsx           # Featured projects & architecture modal
│   │   ├── ResumeSection.tsx      # Embedded PDF viewer & download handler
│   │   └── Skills.tsx             # Categorized technical competencies
│   ├── data/
│   │   └── portfolioData.ts       # Central data store for easy content updates
│   ├── types/
│   │   └── portfolio.ts           # TypeScript interfaces
│   ├── App.tsx                    # Main root component
│   ├── index.css                  # Global styles & font configuration
│   └── main.tsx                   # React DOM entry point
├── index.html                     # HTML head, Google Fonts, and SEO metadata
├── metadata.json                  # AI Studio project metadata
├── package.json                   # Dependencies and npm scripts
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite bundler configuration
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed on your system.

### 2. Installation
Clone or extract the repository, navigate to the folder, and install dependencies:

```bash
cd anushri-portfolio
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to preview the site with instant reload.

### 4. Build for Production
```bash
npm run build
```
This produces a production-optimized build in the `dist/` directory.

---

## 📄 How to Add Your Real Resume PDF

1. Prepare your updated resume PDF exported from your favorite editor.
2. Name the file `resume.pdf`.
3. Copy or move it into the `public/` directory:
   ```text
   public/resume.pdf
   ```
4. Vite serves any static file in `public/` directly from the root URL. The View and Download buttons are already preconfigured to link to `/resume.pdf` and download as `Anushri_PB_Resume.pdf`.

---

## 🐙 How to Push to GitHub & Deploy to GitHub Pages

Repository: [https://github.com/pbanushri-hash/anushri-pb-portfolio](https://github.com/pbanushri-hash/anushri-pb-portfolio)  
Live URL: [https://pbanushri-hash.github.io/anushri-pb-portfolio/](https://pbanushri-hash.github.io/anushri-pb-portfolio/)

### 1. Push Fix to GitHub
In your project root directory, run:

```bash
git add .
git commit -m "fix: configure vite base path and github pages automated workflow"
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Actions in Repository Settings
To let the included workflow (`.github/workflows/deploy.yml`) deploy automatically:
1. Open your repository on GitHub: `https://github.com/pbanushri-hash/anushri-pb-portfolio`
2. Go to **Settings** &gt; **Pages** (in the left sidebar).
3. Under **Build and deployment** &gt; **Source**, select **GitHub Actions**.
4. That's it! Every time you push to `main`, GitHub Actions will automatically install dependencies, build the production bundle with the `/anushri-pb-portfolio/` base path, and deploy the `dist/` directory to GitHub Pages.

---

## ⚡ Alternative: Deploy on Vercel (Free Hosting)

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** (choose **Continue with GitHub** with account `pbanushri-hash`).
2. Click **Add New... > Project**.
3. Find your **`anushri-pb-portfolio`** repository in the list and click **Import**.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.
6. In ~30–45 seconds, your website is live with an official HTTPS URL.

---

## 🔄 How to Update Your Portfolio Later

All personal content, project descriptions, skills, and certifications are stored cleanly in one centralized file:
- `src/data/portfolioData.ts`

Whenever you:
- Complete a new project or obtain a new certification
- Update your CGPA or academic year
- Add a live demo link

Simply edit `src/data/portfolioData.ts`, commit, and push:
```bash
git add .
git commit -m "feat: add new project and updated certifications"
git push
```
Vercel will detect your push and automatically rebuild and publish your live site within seconds!
