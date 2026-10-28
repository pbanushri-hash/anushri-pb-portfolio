import React, { useState } from 'react';
import {
  FileText,
  Download,
  FolderGit2,
  Linkedin,
  Github,
  Award,
  Sparkles,
  ArrowRight,
  Camera,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGuide }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPdfAvailable, setIsPdfAvailable] = useState<boolean | null>(null);

  React.useEffect(() => {
    fetch(personalInfo.resumePath, { method: 'HEAD' })
      .then((res) => {
        const ct = res.headers.get('content-type') || '';
        setIsPdfAvailable(res.ok && ct.includes('application/pdf'));
      })
      .catch(() => setIsPdfAvailable(false));
  }, []);

  const handleDownload = () => {
    if (!isPdfAvailable) {
      const el = document.getElementById('resume');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = personalInfo.resumeDownloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white"
    >
      {/* Subtle lavender ambient aura */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-purple-200/20 blur-3xl -z-10 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-900 tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-600 inline-block" />
              <span>Computer Science & Engineering</span>
              <span className="text-purple-300">/</span>
              <span>SNS College of Technology</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-4">
              {personalInfo.name}
            </h1>

            {/* Headline */}
            <p className="text-lg sm:text-xl font-medium text-purple-950 mb-5 max-w-2xl leading-snug">
              {personalInfo.title}
            </p>

            {/* Introduction Paragraph */}
            <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mb-8">
              {personalInfo.introduction}
            </p>

            {/* 5 Functional Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* 1. View My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-900 text-white text-sm font-semibold hover:bg-purple-950 active:bg-purple-800 transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900 whitespace-nowrap"
              >
                <FolderGit2 className="w-4 h-4 text-purple-200" />
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-purple-200" />
              </a>

              {/* 2. View My Resume */}
              <a
                href={isPdfAvailable ? personalInfo.resumePath : '#resume'}
                target={isPdfAvailable ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-zinc-800 text-sm font-semibold border border-purple-200/90 hover:bg-purple-50 hover:border-purple-300 transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-purple-900 whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-purple-700" />
                <span>View Resume</span>
              </a>

              {/* 3. Download Resume */}
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-100 text-purple-950 text-sm font-semibold hover:bg-purple-200/80 transition-all focus-visible:outline-2 focus-visible:outline-purple-900 whitespace-nowrap"
                title="Download Anushri_PB_Resume.pdf"
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-800">Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-purple-800" />
                    <span>Download Resume</span>
                  </>
                )}
              </button>

              {/* 4. GitHub */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-2xs whitespace-nowrap"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* 5. LinkedIn */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#0A66C2] text-white text-sm font-medium hover:bg-[#004182] transition-all shadow-2xs whitespace-nowrap"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Profile Photo with Lavender & White Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative lavender ambient glow & frame */}
              <div className="relative bg-white rounded-2xl border border-purple-200/80 p-5 sm:p-6 shadow-sm">
                {/* Visual Portrait Container */}
                <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-xl bg-gradient-to-br from-purple-100/70 via-purple-50 to-white flex flex-col items-center justify-center border border-purple-100/90 overflow-hidden group">
                  {/* Actual Professional Photograph */}
                  <img
                    src={personalInfo.profilePhotoUrl}
                    alt={`${personalInfo.name} - Professional Portrait`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to direct asset path or styled placeholder if /profile.jpg fails
                      const target = e.currentTarget;
                      if (!target.src.includes('WhatsApp_Image')) {
                        target.src = '/assets/aistudio/WhatsApp_Image_2026-10-28_at_8.16.31_PM_0891812e.jpeg';
                      }
                    }}
                  />

                  {/* Measured subtle gradient scrim at the bottom for readability */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent pt-12 pb-4 px-4 text-white">
                    <h2 className="text-base font-bold tracking-tight text-white drop-shadow-xs">
                      {personalInfo.name}
                    </h2>
                    <p className="text-xs text-purple-200 font-medium drop-shadow-xs">
                      B.E. CSE · SNS College of Technology
                    </p>
                  </div>
                </div>

                {/* Quick Info Bar below card */}
                <div className="mt-4 pt-3.5 border-t border-purple-100 flex items-center justify-between text-xs text-zinc-600">
                  <span className="flex items-center gap-1.5 font-medium text-purple-950">
                    <Award className="w-4 h-4 text-purple-700" />
                    <span>DT & NOVA 360 Award Winner</span>
                  </span>
                  <span className="font-mono text-purple-900 font-semibold">
                    CGPA: {personalInfo.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Key Metric Adjacency Bar (Zero-Pill Discipline) */}
        <div className="mt-14 pt-8 border-t border-purple-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-zinc-700">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-purple-900 mb-1">
              Academic Standing
            </div>
            <div className="text-2xl font-bold text-zinc-900 tracking-tight">
              {personalInfo.cgpa} <span className="text-sm font-normal text-zinc-500">CGPA</span>
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">SNS College of Technology</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-purple-900 mb-1">
              Degree & Cohort
            </div>
            <div className="text-2xl font-bold text-zinc-900 tracking-tight">
              2029 <span className="text-sm font-normal text-zinc-500">Graduation</span>
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">Second Year CSE</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-purple-900 mb-1">
              Featured Work
            </div>
            <div className="text-2xl font-bold text-zinc-900 tracking-tight">
              4 <span className="text-sm font-normal text-zinc-500">Projects</span>
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">AI, Web & 3D Unity</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-purple-900 mb-1">
              Key Recognitions
            </div>
            <div className="text-2xl font-bold text-zinc-900 tracking-tight">
              1st & 3rd Prizes
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">DT & NOVA 360 Project Expos</div>
          </div>
        </div>
      </div>
    </section>
  );
};
