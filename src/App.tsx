/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';

export default function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* Top Navigation Bar */}
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home / Hero Section */}
        <Hero onOpenGuide={() => setIsGuideOpen(true)} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Achievements Section */}
        <Achievements />

        {/* 6. Internship / Experience Section */}
        <Experience />

        {/* 7. Certifications Section */}
        <Certifications />

        {/* 8. Dedicated Resume Preview & Download Section */}
        <ResumeSection onOpenGuide={() => setIsGuideOpen(true)} />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Step-by-Step GitHub & Vercel Deployment Modal */}
      <DeploymentGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
