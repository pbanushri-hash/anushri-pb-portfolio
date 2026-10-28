import React, { useState } from 'react';
import {
  X,
  FileText,
  Github,
  Globe,
  RefreshCw,
  Download,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'resume' | 'export' | 'github' | 'vercel' | 'update'>('resume');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const tabs = [
    { id: 'resume', label: '1. Add Actual Resume PDF', icon: FileText },
    { id: 'export', label: '2. Download Source Code', icon: Download },
    { id: 'github', label: '3. Push to GitHub', icon: Github },
    { id: 'vercel', label: '4. Deploy on Vercel', icon: Globe },
    { id: 'update', label: '5. Update Site Later', icon: RefreshCw },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-purple-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-purple-100 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-900 uppercase tracking-wide">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Step-by-Step Developer Guide</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mt-1">
              Portfolio Deployment & Customization Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center gap-1 overflow-x-auto py-3 border-b border-zinc-100 shrink-0 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-900 text-white font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-purple-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content body */}
        <div className="py-5 overflow-y-auto flex-1 text-sm text-zinc-700 space-y-4">
          {/* TAB 1: ADD ACTUAL RESUME PDF */}
          {activeTab === 'resume' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200">
                <h4 className="font-bold text-purple-950 mb-1 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-700" />
                  Exact File Location: <code className="font-mono bg-white px-2 py-0.5 rounded text-xs text-purple-900 font-bold">public/resume.pdf</code>
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  The initial placeholder PDF has been removed from the repository.
                  The application is configured to serve your original resume as soon as you place your PDF into <code className="font-mono text-purple-900 font-semibold">public/resume.pdf</code>.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h5 className="font-semibold text-zinc-900">Name your file</h5>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      Ensure your original PDF is named <code className="font-mono bg-zinc-100 px-1 py-0.5 rounded font-bold">resume.pdf</code> (all lowercase).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h5 className="font-semibold text-zinc-900">Copy into the public folder</h5>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      Place the file into the project's <code className="font-mono bg-zinc-100 px-1 py-0.5 rounded">public/</code> directory so its full path is <code className="font-mono bg-zinc-100 px-1 py-0.5 rounded font-bold">public/resume.pdf</code>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h5 className="font-semibold text-zinc-900">Verify in your browser</h5>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      Visit <code className="font-mono bg-zinc-100 px-1 py-0.5 rounded">/resume.pdf</code> directly or click <strong>View Resume</strong> in the header or hero. The embedded viewer and download button will both immediately deliver your original document.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EXPORT OR DOWNLOAD SOURCE CODE */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <h4 className="font-bold text-zinc-900">
                How to Export or Download the Complete Codebase
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                You can download the full codebase directly from Google AI Studio or clone the files locally:
              </p>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">A.</span>
                  <div>
                    <strong className="text-zinc-900">In AI Studio:</strong> Click the <strong>Download / Export</strong> button located in the top bar of Google AI Studio to download the entire project as a <code className="font-mono text-xs">.zip</code> archive.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">B.</span>
                  <div>
                    <strong className="text-zinc-900">Extract Locally:</strong> Unzip the archive into any folder on your machine (e.g., <code className="font-mono text-xs">~/Desktop/anushri-portfolio</code>).
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-700 font-bold">C.</span>
                  <div>
                    <strong className="text-zinc-900">Install & Run:</strong> Open a terminal in that folder and run <code className="font-mono text-xs bg-white px-1 py-0.5 rounded">npm install</code> followed by <code className="font-mono text-xs bg-white px-1 py-0.5 rounded">npm run dev</code>.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PUSH TO GITHUB */}
          {activeTab === 'github' && (
            <div className="space-y-4">
              <h4 className="font-bold text-zinc-900">
                Push Code to your GitHub (<code className="font-mono text-xs text-purple-900">pbanushri-hash</code>)
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Run these commands inside your project terminal to commit and push the fix:
              </p>

              {/* Terminal Code Snippet */}
              <div className="relative bg-zinc-950 text-zinc-200 p-4 rounded-xl font-mono text-xs leading-relaxed">
                <button
                  onClick={() =>
                    handleCopy(
                      `git add .\ngit commit -m "fix: configure vite base path and github pages automated workflow"\ngit branch -M main\ngit remote set-url origin https://github.com/pbanushri-hash/anushri-pb-portfolio.git || git remote add origin https://github.com/pbanushri-hash/anushri-pb-portfolio.git\ngit push -u origin main`,
                      'git-cmds'
                    )
                  }
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                  title="Copy commands"
                >
                  {copiedCode === 'git-cmds' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <div className="text-zinc-400"># Run in your project root:</div>
                <div>git add .</div>
                <div>git commit -m &quot;fix: configure vite base path and github pages automated workflow&quot;</div>
                <div>git branch -M main</div>
                <div>git push -u origin main</div>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-xs text-zinc-700 space-y-2">
                <div className="font-bold text-purple-950">
                  ⚙️ One-Time GitHub Settings Step for GitHub Pages:
                </div>
                <ol className="list-decimal list-inside space-y-1 text-zinc-600">
                  <li>Go to your repository on GitHub: <code className="font-mono bg-white px-1 py-0.5 rounded">github.com/pbanushri-hash/anushri-pb-portfolio</code></li>
                  <li>Click <strong>Settings</strong> &gt; <strong>Pages</strong> (in the left sidebar).</li>
                  <li>Under <strong>Build and deployment &gt; Source</strong>, choose <strong>GitHub Actions</strong>.</li>
                  <li>The included <code className="font-mono bg-white px-1 py-0.5 rounded">.github/workflows/deploy.yml</code> workflow will automatically build and publish your site!</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 4: DEPLOY ON VERCEL */}
          {activeTab === 'vercel' && (
            <div className="space-y-4">
              <h4 className="font-bold text-zinc-900">
                Deploy Website to Vercel (Free 24/7 Hosting)
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Vercel natively supports Vite + React with zero complex configuration:
              </p>

              <ol className="space-y-3 text-xs text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-2xs shrink-0">1</span>
                  <div>
                    Sign up or log in at <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-purple-900 underline font-semibold">vercel.com</a> using your GitHub account (<code className="font-mono">pbanushri-hash</code>).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-2xs shrink-0">2</span>
                  <div>
                    Click <strong>Add New... &gt; Project</strong> and select <code className="font-mono font-semibold">anushri-portfolio</code> from your GitHub repositories.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-2xs shrink-0">3</span>
                  <div>
                    Vercel automatically detects <strong>Vite</strong>. The default settings are already perfect:
                    <ul className="mt-1 list-disc list-inside text-zinc-500 font-mono text-2xs">
                      <li>Framework Preset: Vite</li>
                      <li>Build Command: npm run build</li>
                      <li>Output Directory: dist</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-2xs shrink-0">4</span>
                  <div>
                    Click <strong>Deploy</strong>. Within ~40 seconds, your site is live with a custom HTTPS URL like:
                    <div className="mt-1 text-purple-900 font-mono font-semibold bg-purple-50 p-2 rounded border border-purple-200">
                      https://anushri-portfolio.vercel.app
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          )}

          {/* TAB 5: UPDATE SITE LATER */}
          {activeTab === 'update' && (
            <div className="space-y-4">
              <h4 className="font-bold text-zinc-900">
                How to Update Your Portfolio in the Future
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                All personal information, projects, and skills are centralized in a single clean data file:
              </p>

              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2 text-xs">
                <div className="font-bold text-purple-950">
                  📁 File to edit: <code className="font-mono bg-white px-2 py-0.5 rounded text-purple-900">src/data/portfolioData.ts</code>
                </div>
                <p className="text-zinc-600">
                  Whenever you complete a new project, achieve an award, gain a new certification, or advance in your academic year, simply add or update the entries in this file!
                </p>
              </div>

              <div className="p-4 bg-zinc-950 text-zinc-200 rounded-xl font-mono text-xs">
                <div className="text-zinc-400"># After making your changes:</div>
                <div>git add .</div>
                <div>git commit -m &quot;feat: add new project and updated certification&quot;</div>
                <div>git push</div>
                <div className="text-emerald-400 mt-2"># Vercel automatically rebuilds and deploys in seconds!</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-purple-100 flex items-center justify-between shrink-0">
          <span className="text-xs text-zinc-500 font-mono">
            {personalInfo.githubUrl}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-purple-900 text-white rounded-lg text-xs font-semibold hover:bg-purple-950 transition-colors"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
