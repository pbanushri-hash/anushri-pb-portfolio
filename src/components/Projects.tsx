import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Award,
  Sparkles,
  Layers,
  ArrowUpRight,
  Info,
  CheckCircle,
  X,
  Code2,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-web' | '3d-games'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-purple-900 tracking-wider uppercase mb-2">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
              Software & Engineering Projects
            </h2>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed">
              Real-world systems, web applications, and interactive 3D simulations built with
              clean architectures and verified public GitHub repositories.
            </p>
          </div>

          {/* Interactive Filter Tabs (Zero-Pill: clean segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-purple-50/70 rounded-lg border border-purple-100 self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-purple-900 text-white shadow-2xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('ai-web')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeFilter === 'ai-web'
                  ? 'bg-purple-900 text-white shadow-2xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              AI & Web Platforms
            </button>
            <button
              onClick={() => setActiveFilter('3d-games')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeFilter === '3d-games'
                  ? 'bg-purple-900 text-white shadow-2xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              3D & Game Systems
            </button>
          </div>
        </div>

        {/* Projects Grid: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-purple-100/90 shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7">
                {/* Header with Award if applicable */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs text-purple-900 font-semibold tracking-wide uppercase">
                      {project.category === 'ai-web' ? 'Web & AI Platform' : '3D Simulation / Game'}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight mt-1 group-hover:text-purple-950 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {project.awardBadge && (
                    <div className="flex items-center gap-1.5 text-2xs font-semibold text-purple-950 bg-purple-100/80 px-2.5 py-1 rounded-md shrink-0 border border-purple-200">
                      <Award className="w-3.5 h-3.5 text-purple-700" />
                      <span>{project.awardBadge}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technical Stack Tags (Zero-Pill: subtle clean typography with separators) */}
                <div className="mb-6">
                  <div className="text-xs font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">
                    Technologies
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-purple-950 font-medium">
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="hover:text-purple-700 transition-colors">{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span className="text-purple-300 font-bold" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 text-xs text-zinc-600 bg-[#FAF9FD] p-3.5 rounded-lg border border-purple-50">
                  {project.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Functional Action Buttons */}
              <div className="px-6 py-4 bg-zinc-50/60 border-t border-purple-100/70 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {/* Verified GitHub Repository Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors shadow-2xs"
                    title={`View ${project.shortTitle} on GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>

                  {/* Live Demo button: Only show when genuine live demo exists, otherwise honest status indicator */}
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-purple-900 text-white text-xs font-medium hover:bg-purple-950 transition-colors shadow-2xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-2xs text-zinc-500 font-mono py-1 px-2 bg-white rounded border border-zinc-200/80">
                      <span>Source Available</span>
                    </span>
                  )}
                </div>

                {/* Details Modal Trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-purple-900 hover:text-purple-700 transition-colors inline-flex items-center gap-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Architecture Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-xs"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-xl border border-purple-100 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-purple-100">
                <div>
                  <span className="text-xs font-semibold text-purple-900 uppercase tracking-wide">
                    Project Architecture
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-4 text-sm text-zinc-700">
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">
                    System Overview
                  </h4>
                  <p className="leading-relaxed text-zinc-600">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                    Key Features & Implementations
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-600">
                        <span className="text-purple-700 font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-purple-950 bg-purple-50 px-2.5 py-1 rounded border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-100 flex items-center justify-between gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Open GitHub Repository</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-xs font-medium text-zinc-600 hover:text-zinc-900"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
