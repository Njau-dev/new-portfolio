'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal, X, BookOpen, Maximize2, Minimize2, RefreshCw } from 'lucide-react';
import { CLIPlaygroundProps } from '@/types/project';

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
            iframeRef.current.src = terminalUrl + '?reload=' + Date.now();
        }
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <div className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 ${isFullscreen ? 'p-0' : ''
            }`}>
            <div className={`w-full bg-[#1e1e1e] border border-gray/70 flex flex-col ${isFullscreen ? 'h-full max-w-none' : 'max-w-7xl h-[85vh]'
                }`}>
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray/70 bg-[#252526]">
                    <div className="flex items-center gap-3">
                        <Terminal size={20} className="text-primary" />
                        <div>
                            <span className="text-white font-medium">{projectTitle}</span>
                            <span className="text-gray text-sm ml-2">Live Terminal</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Help Button */}
                        {commands && commands.length > 0 && (
                            <button
                                onClick={() => setShowHelp(!showHelp)}
                                className="flex items-center gap-2 text-gray hover:text-primary transition-colors px-3 py-1 border border-gray/50 hover:border-primary text-sm"
                                title="Toggle help"
                            >
                                <BookOpen size={16} />
                                Help
                            </button>
                        )}

                        {/* Refresh Button */}
                        <button
                            onClick={handleRefresh}
                            className="text-gray hover:text-primary transition-colors p-1"
                            title="Restart terminal"
                        >
                            <RefreshCw size={18} />
                        </button>

                        {/* Fullscreen Toggle */}
                        <button
                            onClick={toggleFullscreen}
                            className="text-gray hover:text-primary transition-colors p-1"
                            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                        >
                            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                        </button>

                        {/* Docs Button */}
                        {onOpenReadme && (
                            <button
                                onClick={onOpenReadme}
                                className="flex items-center gap-2 text-gray hover:text-primary transition-colors px-3 py-1 border border-gray/50 hover:border-primary text-sm"
                            >
                                <BookOpen size={16} />
                                Docs
                            </button>
                        )}

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="text-gray hover:text-white transition-colors p-1"
                            aria-label="Close playground"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Help Panel */}
                {showHelp && commands && commands.length > 0 && (
                    <div className="bg-primary/20 border-b border-primary/30 p-4">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="text-primary font-semibold mb-2 flex items-center gap-2">
                                    <BookOpen size={16} />
                                    Available Commands
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    {commands.slice(0, 4).map((cmd, index) => (
                                        <div key={index} className="bg-[#1e1e1e] rounded p-2">
                                            <code className="text-primary">{cmd.command}</code>
                                            <p className="text-gray text-xs mt-1">{cmd.description}</p>
                                        </div>
                                    ))}
                                </div>
                                {commands.length > 4 && (
                                    <p className="text-gray text-xs mt-2">
                                        + {commands.length - 4} more commands. Type <code className="text-primary">scaffold --help</code> to see all.
                                    </p>
                                )}
                            </div>
                            <button
                                onClick={() => setShowHelp(false)}
                                className="text-gray hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {/* Loading Overlay */}
                {isLoading && (
                    <div className="absolute inset-0 bg-[#1e1e1e] flex items-center justify-center z-10">
                        <div className="text-center">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray border-t-primary mb-4"></div>
                            <p className="text-gray">Starting terminal...</p>
                            <p className="text-gray text-sm mt-2">Installing {projectTitle}...</p>
                        </div>
                    </div>
                )}

                {/* Terminal iframe */}
                <div className="flex-1 relative overflow-hidden">
                    <iframe
                        ref={iframeRef}
                        src={terminalUrl}
                        onLoad={handleIframeLoad}
                        className="w-full h-full border-0"
                        title={`${projectTitle} Terminal`}
                        sandbox="allow-same-origin allow-scripts allow-forms"
                    />
                </div>

                {/* Footer */}
                <div className="px-4 py-2 bg-[#1e1e1e] border-t border-gray/70 flex items-center justify-between text-xs text-gray">
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