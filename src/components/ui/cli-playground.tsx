"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, X, BookOpen, Maximize2, Minimize2, RefreshCw } from "lucide-react";
import { CLIPlaygroundProps } from "@/types/project";

const CLIPlayground = ({
  commands,
  projectTitle,
  installCommand,
  githubUrl,
  terminalUrl,
  onClose,
  onOpenReadme
}: CLIPlaygroundProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Hide help after 5 seconds
    const timer = setTimeout(() => setShowHelp(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      // Add timestamp to force reload and bust cache
      iframeRef.current.src = terminalUrl + "?reload=" + Date.now();
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`bg-background/95 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm ${
        isFullscreen ? "p-0" : ""
      }`}
    >
      <div
        className={`border-gray/70 flex w-full flex-col border bg-[#1e1e1e] ${
          isFullscreen ? "h-full max-w-none" : "h-[85vh] max-w-7xl"
        }`}
      >
        {/* Header */}
        <div className="border-gray/70 flex items-center justify-between border-b bg-[#252526] px-4 py-3">
          <div className="flex items-center gap-3">
            <Terminal size={20} className="text-primary" />
            <div>
              <span className="font-medium text-white">{projectTitle}</span>
              <span className="text-gray ml-2 text-sm">Live Terminal</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Help Button */}
            {commands && commands.length > 0 && (
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="text-gray hover:text-primary border-gray/50 hover:border-primary flex items-center gap-2 border px-3 py-1 text-sm transition-colors"
                title="Toggle help"
              >
                <BookOpen size={16} />
                Help
              </button>
            )}

            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              className="text-gray hover:text-primary p-1 transition-colors"
              title="Restart terminal"
            >
              <RefreshCw size={18} />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="text-gray hover:text-primary p-1 transition-colors"
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>

            {/* Docs Button */}
            {onOpenReadme && (
              <button
                onClick={onOpenReadme}
                className="text-gray hover:text-primary border-gray/50 hover:border-primary flex items-center gap-2 border px-3 py-1 text-sm transition-colors"
              >
                <BookOpen size={16} />
                Docs
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-gray p-1 transition-colors hover:text-white"
              aria-label="Close playground"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Help Panel */}
        {showHelp && commands && commands.length > 0 && (
          <div className="bg-primary/20 border-primary/30 border-b p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-primary mb-2 flex items-center gap-2 font-semibold">
                  <BookOpen size={16} />
                  Available Commands
                </h3>
                <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                  {commands.slice(0, 4).map((cmd, index) => (
                    <div key={index} className="rounded bg-[#1e1e1e] p-2">
                      <code className="text-primary">{cmd.command}</code>
                      <p className="text-gray mt-1 text-xs">{cmd.description}</p>
                    </div>
                  ))}
                </div>
                {commands.length > 4 && (
                  <p className="text-gray mt-2 text-xs">
                    + {commands.length - 4} more commands. Type{" "}
                    <code className="text-primary">scaffold --help</code> to see all.
                  </p>
                )}
              </div>
              <button
                onClick={() => setShowHelp(false)}
                className="text-gray transition-colors hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#1e1e1e]">
            <div className="text-center">
              <div className="border-gray border-t-primary mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4"></div>
              <p className="text-gray">Starting terminal...</p>
              <p className="text-gray mt-2 text-sm">Installing {projectTitle}...</p>
            </div>
          </div>
        )}

        {/* Terminal iframe */}
        <div className="relative flex-1 overflow-hidden">
          <iframe
            ref={iframeRef}
            src={terminalUrl}
            onLoad={handleIframeLoad}
            className="h-full w-full border-0"
            title={`${projectTitle} Terminal`}
            sandbox="allow-same-origin allow-scripts allow-forms"
          />
        </div>

        {/* Footer */}
        <div className="border-gray/70 text-gray flex items-center justify-between border-t bg-[#1e1e1e] px-4 py-2 text-xs">
          <div className="flex items-center gap-4">
            <span>🚀 Live Python Environment</span>
            <span>•</span>
            <span>All files are temporary</span>
            {installCommand && (
              <>
                <span>•</span>
                <span className="text-primary">{projectTitle} pre-installed</span>
              </>
            )}
          </div>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              View Source →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CLIPlayground;
