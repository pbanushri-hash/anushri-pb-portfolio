import React, { useState, useEffect } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  UploadCloud,
  Maximize2,
  Image as ImageIcon,
  Check,
  Copy,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenGuide: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenGuide }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [customPdfUrl, setCustomPdfUrl] = useState<string | null>(null);
  const [customFileName, setCustomFileName] = useState<string | null>(null);
  const [isOriginalPdfAvailable, setIsOriginalPdfAvailable] = useState<boolean | null>(null);
  const [showUploadAlert, setShowUploadAlert] = useState(false);
  const [copiedPath, setCopiedPath] = useState(false);

  // Check if public/resume.pdf exists on the server
  useEffect(() => {
    const checkPdf = async () => {
      try {
        const res = await fetch(personalInfo.resumePath, { method: 'HEAD' });
        // If file exists and content type is PDF or 200 OK (and not HTML fallback)
        if (res.ok) {
          const contentType = res.headers.get('content-type') || '';
          if (contentType.includes('application/pdf')) {
            setIsOriginalPdfAvailable(true);
            return;
          }
        }
        setIsOriginalPdfAvailable(false);
      } catch {
        setIsOriginalPdfAvailable(false);
      }
    };
    checkPdf();
  }, [customPdfUrl]);

  const activePdfUrl = customPdfUrl || personalInfo.resumePath;
  const hasActivePdf = Boolean(customPdfUrl) || isOriginalPdfAvailable === true;

  const handleView = (e: React.MouseEvent) => {
    if (!hasActivePdf) {
      e.preventDefault();
      setShowUploadAlert(true);
      setTimeout(() => setShowUploadAlert(false), 5000);
    }
  };

  const handleDownload = () => {
    if (!hasActivePdf) {
      setShowUploadAlert(true);
      setTimeout(() => setShowUploadAlert(false), 5000);
      return;
    }

    const link = document.createElement('a');
    link.href = activePdfUrl;
    link.download = customFileName || personalInfo.resumeDownloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleLocalFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const objectUrl = URL.createObjectURL(file);
      setCustomPdfUrl(objectUrl);
      setCustomFileName(file.name);
      setIsOriginalPdfAvailable(true);
      setShowUploadAlert(false);
    }
  };

  const copyPath = () => {
    navigator.clipboard.writeText('public/resume.pdf');
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  return (
    <section id="resume" className="py-20 bg-white border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-purple-900 tracking-wider uppercase mb-2">
              Curriculum Vitae
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
              Resume Preview & Download
            </h2>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed">
              Configured to serve your original resume PDF from the exact location{' '}
              <code className="text-purple-900 font-mono bg-purple-50 px-1.5 py-0.5 rounded text-xs font-semibold">
                public/resume.pdf
              </code>.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Resume Button */}
            <a
              href={hasActivePdf ? activePdfUrl : '#resume'}
              target={hasActivePdf ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={handleView}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-xs whitespace-nowrap focus-visible:outline-2 focus-visible:outline-purple-900 ${
                hasActivePdf
                  ? 'bg-purple-900 text-white hover:bg-purple-950 active:bg-purple-800'
                  : 'bg-purple-100 text-purple-950 hover:bg-purple-200/80 cursor-pointer'
              }`}
            >
              <Eye className="w-4 h-4 text-purple-200" />
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Download Resume Button */}
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-zinc-800 text-sm font-semibold border border-purple-200/90 hover:bg-purple-50 hover:border-purple-300 transition-all shadow-2xs whitespace-nowrap"
              title={`Download ${personalInfo.resumeDownloadFilename}`}
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-800">Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-purple-800" />
                  <span>Download Resume</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Upload Alert Notice when user clicks before uploading */}
        {showUploadAlert && (
          <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start justify-between gap-3 animate-fadeIn">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Original PDF Not Found Yet:</strong> The placeholder PDF has been removed.
                Please upload your original PDF file into <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-amber-300">public/resume.pdf</code>,
                or use the <strong>Select Local PDF</strong> button below to preview it immediately.
              </div>
            </div>
            <button
              onClick={() => setShowUploadAlert(false)}
              className="text-amber-700 hover:text-amber-900 font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {/* Clear Status & Upload Instructions Banner */}
        <div className="mb-6 p-5 rounded-xl bg-purple-50/70 border border-purple-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-start sm:items-center gap-3 text-zinc-700">
            <FileText className="w-5 h-5 text-purple-700 shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-purple-950 text-sm">
                  {hasActivePdf
                    ? customFileName
                      ? `Previewing Local File: ${customFileName}`
                      : 'Original Resume PDF Active'
                    : 'Original PDF Required'}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-2xs font-semibold ${
                    hasActivePdf
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}
                >
                  {hasActivePdf ? 'Ready' : 'Pending Upload'}
                </span>
              </div>
              <p className="text-zinc-600 mt-1 leading-relaxed">
                Place your actual resume PDF in the project folder at:{' '}
                <button
                  type="button"
                  onClick={copyPath}
                  className="inline-flex items-center gap-1 font-mono text-purple-900 bg-white px-1.5 py-0.5 rounded border border-purple-200 hover:bg-purple-50 transition-colors font-bold"
                  title="Click to copy path"
                >
                  <span>public/resume.pdf</span>
                  {copiedPath ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-zinc-400" />}
                </button>
                <span className="text-zinc-500 block sm:inline sm:ml-2">
                  (No code edits needed; it will immediately activate for View and Download).
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Live in-browser PDF selector for immediate testing */}
            <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-purple-900 rounded-lg font-medium border border-purple-200 hover:bg-purple-50 transition-colors shadow-2xs">
              <UploadCloud className="w-3.5 h-3.5 text-purple-700" />
              <span>Select Local PDF</span>
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleLocalFileUpload}
              />
            </label>

            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1 text-purple-900 font-semibold hover:underline"
            >
              <HelpCircle className="w-3.5 h-3.5 text-purple-700" />
              <span>Instructions</span>
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Box */}
        <div className="bg-zinc-100 rounded-2xl border border-purple-200/80 overflow-hidden shadow-xs">
          {/* Toolbar */}
          <div className="px-4 py-3 bg-white border-b border-purple-100 flex items-center justify-between text-xs text-zinc-600">
            <div className="flex items-center gap-2 font-medium">
              <FileText className="w-4 h-4 text-purple-700" />
              <span className="text-zinc-900 font-semibold">
                {customFileName || (hasActivePdf ? 'resume.pdf' : 'Original Resume PDF (Pending Upload)')}
              </span>
              <span className="text-zinc-400">·</span>
              <span className="text-purple-900 font-mono text-2xs">
                {hasActivePdf ? 'Active PDF Document' : 'Awaiting File'}
              </span>
            </div>

            {hasActivePdf && (
              <a
                href={activePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-purple-900 hover:text-purple-950 font-medium hover:underline"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </a>
            )}
          </div>

          {/* Content Area */}
          <div className="relative w-full min-h-[560px] sm:min-h-[720px] bg-zinc-200/40 flex items-center justify-center p-2 sm:p-4">
            {hasActivePdf ? (
              <object
                data={`${activePdfUrl}#toolbar=1&navpanes=0`}
                type="application/pdf"
                className="w-full h-[560px] sm:h-[720px] rounded-lg bg-white shadow-xs"
              >
                {/* Fallback if browser does not embed inline */}
                <div className="p-8 text-center max-w-md bg-white rounded-xl shadow-sm border border-purple-100 m-4">
                  <FileText className="w-12 h-12 text-purple-700 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-zinc-900 mb-2">
                    Resume Document Ready
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    Your PDF is ready. Click below to view or download:
                  </p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={activePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-900 text-white rounded-lg text-xs font-semibold hover:bg-purple-950"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Open PDF in New Tab</span>
                    </a>
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-50 text-purple-900 border border-purple-200 rounded-lg text-xs font-semibold hover:bg-purple-100"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </object>
            ) : (
              /* Informative Empty State when public/resume.pdf is not yet copied */
              <div className="p-8 text-center max-w-lg bg-white rounded-2xl shadow-sm border border-purple-200 m-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-800 flex items-center justify-center mx-auto mb-4 border border-purple-100">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  Original Resume PDF Required
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-5">
                  The placeholder PDF has been removed so it is not shown to recruiters.
                  To display your real resume, copy your official PDF document to:
                </p>

                <div className="bg-purple-50/80 p-3 rounded-lg border border-purple-200 mb-5 text-left text-xs space-y-1.5">
                  <div className="font-semibold text-purple-950">Required File Location:</div>
                  <div className="font-mono text-purple-900 font-bold bg-white p-2 rounded border border-purple-100 break-all select-all">
                    public/resume.pdf
                  </div>
                  <div className="text-zinc-500 text-2xs">
                    (In your project root, open the <code className="font-mono">public/</code> folder and paste <code className="font-mono">resume.pdf</code>)
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2.5 bg-purple-900 text-white rounded-lg text-xs font-semibold hover:bg-purple-950 transition-colors shadow-xs">
                    <UploadCloud className="w-4 h-4 text-purple-200" />
                    <span>Select Local PDF to Preview</span>
                    <input
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      onChange={handleLocalFileUpload}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={onOpenGuide}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-zinc-700 border border-zinc-200 rounded-lg text-xs font-semibold hover:bg-zinc-50 transition-colors"
                  >
                    <span>View Step-by-Step Guide</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
