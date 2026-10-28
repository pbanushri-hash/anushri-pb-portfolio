import React from 'react';
import {
  GraduationCap,
  Target,
  Sparkles,
  BookOpen,
  Compass,
  Code2,
  Award,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-purple-900 tracking-wider uppercase mb-2">
            Background & Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            A dedicated Computer Science and Engineering student focused on building dependable,
            user-centered software and exploring the practical capabilities of artificial intelligence.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Biography Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-700 leading-relaxed text-base">
            <p>
              I am currently in my <strong>second year</strong> pursuing a{' '}
              <strong>Bachelor of Engineering in Computer Science and Engineering</strong> at{' '}
              <strong>SNS College of Technology, Coimbatore</strong>, maintaining a cumulative
              grade point average of <strong className="text-purple-900">8.95 CGPA</strong> with an
              expected graduation in <strong>2029</strong>.
            </p>

            <p>
              My technical interests center on <strong>software development</strong>,{' '}
              <strong>artificial intelligence</strong>, <strong>cloud computing</strong>, and{' '}
              <strong>data analytics</strong>. I actively invest time in hands-on experimentation,
              transforming theoretical concepts into functional web systems and interactive 3D simulations.
            </p>

            <p>
              Beyond coursework, I enjoy exploring modern development frameworks, competing in
              technical project expos, and strengthening my core algorithmic and problem-solving
              abilities through structured programming practice.
            </p>

            {/* Career Goal Highlight Card */}
            <div className="mt-6 p-6 rounded-xl bg-purple-50/60 border border-purple-200/70">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-purple-950 uppercase tracking-wide">
                    Career Objective
                  </h3>
                  <p className="mt-1 text-sm text-zinc-700 leading-relaxed">
                    {personalInfo.careerGoal}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Core Focus Highlights Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Academic Card */}
            <div className="p-6 rounded-xl bg-white border border-purple-100 shadow-2xs hover:border-purple-200 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-900">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900">
                    B.E. Computer Science & Eng.
                  </h3>
                  <p className="text-xs text-zinc-500">SNS College of Technology, Coimbatore</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-zinc-600 border-t border-zinc-100 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Academic Standing</span>
                  <span className="font-semibold text-purple-900 font-mono">8.95 CGPA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Current Standing</span>
                  <span className="font-medium text-zinc-800">Second Year (2025–2026)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Expected Graduation</span>
                  <span className="font-medium text-zinc-800">2029</span>
                </div>
              </div>
            </div>

            {/* Core Interest Pillars */}
            <div className="p-6 rounded-xl bg-white border border-purple-100 shadow-2xs hover:border-purple-200 transition-colors">
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-purple-700" />
                Primary Interest Areas
              </h3>

              <ul className="space-y-2.5 text-sm text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-700 font-bold">·</span>
                  <div>
                    <strong className="text-zinc-900">Software Development:</strong> Component-driven web apps, clean code architecture, and modular full-stack interfaces.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-700 font-bold">·</span>
                  <div>
                    <strong className="text-zinc-900">Artificial Intelligence:</strong> AI workflow integration, prompt engineering, generative models, and intelligent assistants.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-700 font-bold">·</span>
                  <div>
                    <strong className="text-zinc-900">Cloud Computing:</strong> Cloud architectural fundamentals, deployment pipelines, and scalable hosting services.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-700 font-bold">·</span>
                  <div>
                    <strong className="text-zinc-900">Data Analytics:</strong> Practical data exploration, analytical thinking, and metric insights.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
