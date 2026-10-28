import React from 'react';
import { Award, Trophy, Medal, ArrowRight } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-[#FAF9FD] border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-purple-900 tracking-wider uppercase mb-2">
            Recognition & Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Key Achievements
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            Honors and recognitions received for competitive technical engineering, project design,
            and software presentations.
          </p>
        </div>

        {/* Both Achievement Cards in Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const isFirstPrize = item.title.toLowerCase().includes('first');
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-purple-200/80 shadow-xs relative overflow-hidden group hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Subtle lavender ambient aura */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-purple-100/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {/* Award Icon Box */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${
                        isFirstPrize
                          ? 'bg-gradient-to-tr from-purple-900 to-purple-700 text-amber-300'
                          : 'bg-gradient-to-tr from-purple-800 to-purple-600 text-amber-200'
                      }`}
                    >
                      {isFirstPrize ? (
                        <Trophy className="w-7 h-7" />
                      ) : (
                        <Medal className="w-7 h-7" />
                      )}
                    </div>

                    <div className="flex-1">
                      {/* Event & Category */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-purple-900 font-semibold uppercase tracking-wider mb-1">
                        <span>{item.event}</span>
                        <span className="text-purple-300 font-bold">·</span>
                        <span className="text-zinc-500 font-normal">Project Exhibition</span>
                      </div>

                      {/* Title & Prize Label */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                            isFirstPrize
                              ? 'bg-amber-100 text-amber-950 border border-amber-300/70'
                              : 'bg-purple-100 text-purple-950 border border-purple-200'
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight mb-2">
                    {item.title} — {item.event}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer with project reference */}
                <div className="pt-4 border-t border-purple-100/80 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-medium truncate max-w-[240px] sm:max-w-none">
                    Project: <strong className="text-zinc-800">{item.project}</strong>
                  </span>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 font-semibold text-purple-900 hover:text-purple-700 transition-colors shrink-0"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
