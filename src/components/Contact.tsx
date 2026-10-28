import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF9FD] border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-purple-900 tracking-wider uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Contact & Opportunities
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            I am actively seeking software development and AI-related internship opportunities.
            Feel free to reach out via direct email, LinkedIn, or explore my code repositories on GitHub.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl">
          {/* Direct Email Card */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-purple-100 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100/80 flex items-center justify-center text-purple-900 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-1">
                Direct Email
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                Best channel for internship inquiries, campus recruitments, or technical discussions.
              </p>
              <div className="p-3 bg-purple-50/60 rounded-lg border border-purple-100 text-xs font-mono text-zinc-800 break-all mb-4">
                {personalInfo.email}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-purple-50">
              <a
                href={`mailto:${personalInfo.email}?subject=Internship%20Inquiry%20-%20Anushri%20P.B.`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-900 text-white rounded-lg text-xs font-semibold hover:bg-purple-950 transition-colors shadow-2xs whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2.5 rounded-lg border border-purple-200 bg-white text-zinc-700 hover:bg-purple-50 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-600" />
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-purple-100 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] mb-4">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-1">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                Connect professionally, review my academic progress, and follow my updates.
              </p>
              <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 text-xs font-mono text-zinc-700 truncate mb-4">
                linkedin.com/in/anushri-p-b-cse
              </div>
            </div>

            <div className="pt-4 border-t border-purple-50">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0A66C2] text-white rounded-lg text-xs font-semibold hover:bg-[#004182] transition-colors shadow-2xs whitespace-nowrap"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-white/80" />
              </a>
            </div>
          </div>

          {/* GitHub Repositories Card */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-purple-100 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center mb-4">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-1">
                GitHub Repositories
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                Review source code commits, project implementations, and technical contributions.
              </p>
              <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 text-xs font-mono text-zinc-700 truncate mb-4">
                github.com/{personalInfo.githubUsername}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-50">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-900 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-2xs whitespace-nowrap"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Explore GitHub</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Email Templates Box for Recruiters */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-purple-100 max-w-5xl shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-950 uppercase tracking-wider mb-2">
            <MessageSquare className="w-4 h-4 text-purple-700" />
            Quick Email Subject Presets
          </div>
          <p className="text-xs text-zinc-500 mb-4">
            Clicking a preset opens your email client directly with pre-filled subject line for immediate communication:
          </p>

          <div className="flex flex-wrap gap-2.5">
            <a
              href={`mailto:${personalInfo.email}?subject=Software%20Development%20Internship%20Opportunity%20-%20Anushri%20P.B.&body=Hello%20Anushri,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20internship%20opportunity...`}
              className="px-3.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-950 text-xs font-medium border border-purple-200/70 transition-colors inline-flex items-center gap-1.5"
            >
              <span>💼 Software Development Internship</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}?subject=AI%20/%20Machine%20Learning%20Internship%20Inquiry%20-%20Anushri%20P.B.&body=Hello%20Anushri,%0D%0A%0D%0AWe%20came%20across%20your%20ResourceX%20and%20AI%20projects...`}
              className="px-3.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-950 text-xs font-medium border border-purple-200/70 transition-colors inline-flex items-center gap-1.5"
            >
              <span>🤖 AI / Machine Learning Role</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}?subject=Technical%20Collaboration%20/%20Project%20Discussion%20-%20Anushri%20P.B.&body=Hello%20Anushri,%0D%0A%0D%0AI%20would%20like%20to%20connect%20regarding...`}
              className="px-3.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-950 text-xs font-medium border border-purple-200/70 transition-colors inline-flex items-center gap-1.5"
            >
              <span>💡 Technical Collaboration</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
