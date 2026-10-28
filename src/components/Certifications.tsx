import React from 'react';
import { Award, Calendar, Building2, CheckCircle2, BookmarkCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-[#FAF9FD] border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-purple-900 tracking-wider uppercase mb-2">
            Continuous Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            Verified coursework and industry job simulations completed through recognized
            institutions, strengthening practical software, AI, and design thinking foundations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl p-6 border border-purple-100 shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Organization & Date */}
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-3 pb-3 border-b border-zinc-100">
                  <span className="flex items-center gap-1.5 font-semibold text-purple-950">
                    <Building2 className="w-3.5 h-3.5 text-purple-700" />
                    <span>{cert.organization}</span>
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{cert.issuedDate}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-zinc-900 tracking-tight leading-snug mb-4">
                  {cert.title}
                </h3>

                {/* Acquired Skills */}
                <div className="space-y-1.5 text-xs text-zinc-600">
                  <div className="text-2xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Key Competencies
                  </div>
                  {cert.skillsAcquired.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-purple-700 font-bold">·</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Status Tag */}
              <div className="mt-6 pt-3 border-t border-purple-50 flex items-center justify-between text-2xs text-zinc-400">
                <span className="inline-flex items-center gap-1 text-purple-900 font-medium">
                  <BookmarkCheck className="w-3.5 h-3.5 text-purple-700" />
                  <span>Verified Completion</span>
                </span>
                <span>Self-paced / Industry</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
