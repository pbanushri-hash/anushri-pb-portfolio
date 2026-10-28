import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'achievements',
        'experience',
        'certifications',
        'resume',
        'contact',
      ];

      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-purple-100/80 py-3'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-purple-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Zone 1 Wordmark | Zone 2 Nav Links | Zone 3 Primary Action */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-zinc-900 hover:text-purple-900 transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-purple-900 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-xs group-hover:bg-purple-950 transition-colors">
              AP
            </span>
            <span className="text-lg font-bold tracking-tight text-zinc-900 font-sans">
              {personalInfo.name}
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-zinc-600">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  activeSection === link.id
                    ? 'text-purple-900 font-semibold'
                    : 'hover:text-zinc-900'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-700 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenGuide}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-900 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-purple-200/60 whitespace-nowrap shrink-0"
              title="Deployment & setup guide"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Setup & Deploy</span>
            </button>

            <a
              href="#resume"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-purple-900 hover:bg-purple-950 active:bg-purple-800 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-900"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-zinc-700 hover:text-purple-900 hover:bg-purple-50 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-purple-900"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-purple-100 px-4 pt-3 pb-6 shadow-md transition-all">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-purple-50 text-purple-900 font-semibold'
                    : 'text-zinc-700 hover:bg-purple-50/60 hover:text-zinc-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-purple-100 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full text-left px-3 py-2 text-sm font-medium text-purple-900 hover:bg-purple-50 rounded-lg flex items-center justify-between"
              >
                <span>GitHub & Vercel Guide</span>
                <ExternalLink className="w-4 h-4 text-purple-700" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
