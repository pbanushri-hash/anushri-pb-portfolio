import React from 'react';
import {
  Code,
  Globe,
  Box,
  Cpu,
  Layers,
  Terminal,
  FileCode2,
  FileText,
  Cloud,
  Sparkles,
  Search,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-purple-800" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-purple-800" />;
      case '3D Development':
        return <Box className="w-5 h-5 text-purple-800" />;
      case 'Core & Specialized Skills':
      default:
        return <Cpu className="w-5 h-5 text-purple-800" />;
    }
  };

  const getSkillIcon = (skillName: string) => {
    switch (skillName) {
      case 'Python':
        return <Code className="w-4 h-4 text-purple-700" />;
      case 'JavaScript':
      case 'TypeScript':
        return <FileCode2 className="w-4 h-4 text-purple-700" />;
      case 'C#':
        return <Layers className="w-4 h-4 text-purple-700" />;
      case 'HTML5 & Modern Web':
      case 'Modern Web Development':
        return <Globe className="w-4 h-4 text-purple-700" />;
      case 'Unity Engine':
        return <Box className="w-4 h-4 text-purple-700" />;
      case 'Cloud Computing Fundamentals':
        return <Cloud className="w-4 h-4 text-purple-700" />;
      case 'Artificial Intelligence Tools':
      case 'Prompt Engineering':
        return <Sparkles className="w-4 h-4 text-purple-700" />;
      case 'Research & Analytical Skills':
        return <Search className="w-4 h-4 text-purple-700" />;
      default:
        return <Terminal className="w-4 h-4 text-purple-700" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#FAF9FD] border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-purple-900 tracking-wider uppercase mb-2">
            Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            Core programming languages, web standards, 3D interactive tools, and emerging AI
            technologies practiced through university coursework and independent project engineering.
          </p>
        </div>

        {/* Categories Grid (2x2 on desktop, single column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl p-6 border border-purple-100 shadow-xs hover:border-purple-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-zinc-100">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List without fake ratings / percentages */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 rounded-lg hover:bg-purple-50/50 transition-colors border border-transparent hover:border-purple-100"
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className="w-6 h-6 rounded-md bg-purple-100/60 flex items-center justify-center shrink-0">
                          {getSkillIcon(skill.name)}
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-900">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-600 pl-8 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiet editorial count footer */}
              <div className="mt-5 pt-3 border-t border-purple-50 flex items-center justify-between text-2xs text-zinc-500">
                <span>Verified technical skill set</span>
                <span className="font-mono text-purple-900 font-medium">
                  {category.skills.length} competencies
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
