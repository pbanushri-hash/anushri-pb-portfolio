import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-purple-900 tracking-wider uppercase mb-2">
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            Practical industry exposure strengthening foundational infrastructure, cloud concepts,
            and technological readiness.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="max-w-4xl space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-purple-100 shadow-2xs hover:border-purple-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-900 shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                      {exp.position}
                    </h3>
                    <div className="text-sm font-semibold text-purple-900">
                      {exp.organization}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.duration}</span>
                  </span>
                  <span className="text-purple-300">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed mt-4 mb-5">
                {exp.description}
              </p>

              {/* Focus areas / topics covered */}
              <div className="pt-4 border-t border-purple-50">
                <div className="text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                  Key Exposure Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600">
                  {exp.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
