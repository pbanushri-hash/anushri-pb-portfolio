import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, FileText, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-purple-100 py-12 text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-50">
          {/* Brand & Degree Summary */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-zinc-900 tracking-tight">
              {personalInfo.name}
            </span>
            <p className="text-xs text-zinc-500 mt-0.5">
              B.E. Computer Science and Engineering · SNS College of Technology, Coimbatore
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-700 flex items-center justify-center transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] flex items-center justify-center transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-lg bg-purple-100/70 hover:bg-purple-900 hover:text-white text-purple-900 flex items-center justify-center transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-purple-50 hover:bg-purple-900 hover:text-white text-purple-800 flex items-center justify-center transition-colors"
              aria-label="View Resume"
              title="View Resume PDF"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-600 hover:text-purple-900 hover:bg-purple-50 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright & Deployment Guide link */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenGuide}
              className="text-purple-900 hover:text-purple-950 font-medium hover:underline text-xs"
            >
              GitHub & Vercel Deployment Guide
            </button>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-400 font-mono text-2xs">
              Built with React & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
