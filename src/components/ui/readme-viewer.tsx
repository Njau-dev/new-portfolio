'use client';

import { useState, useEffect } from 'react';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ReadmeViewerProps } from '@/types/project';

const ReadmeViewer = ({ githubUrl, readmeContent, projectTitle, onClose }: ReadmeViewerProps) => {
    const [content, setContent] = useState<string>(readmeContent || '');
    const [loading, setLoading] = useState(!readmeContent);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (readmeContent) {
            setContent(readmeContent);
            setLoading(false);
            return;
        }

        if (githubUrl) {
            fetchReadme();
        }
    }, [githubUrl, readmeContent]);

    const fetchReadme = async () => {
        if (!githubUrl) return;

        try {
            setLoading(true);
            setError(null);

            // Extract owner and repo from GitHub URL
            const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (!match) {
                throw new Error('Invalid GitHub URL');
            }

            const [, owner, repo] = match;
            const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;

            const response = await fetch(apiUrl, {
                headers: {
                    'Accept': 'application/vnd.github.v3.raw',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch README');
            }

            const text = await response.text();
            setContent(text);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load documentation');
            // Fallback content
            setContent(generateFallbackContent());
        } finally {
            setLoading(false);
        }
    };

    const generateFallbackContent = () => {
        return `# ${projectTitle} Documentation

## Overview
Documentation for ${projectTitle}.

## Getting Started
Visit the [GitHub repository](${githubUrl}) for complete documentation.

## Installation
\`\`\`bash
# Clone the repository
git clone ${githubUrl}

# Install dependencies
npm install
\`\`\`

## Usage
Refer to the project repository for detailed usage instructions.

## Support
For issues and questions, please visit the GitHub repository.
`;
    };

    return (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-4xl h-[85vh] bg-background border border-gray/70 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray/70">
                    <div className="flex items-center gap-3">
                        <h2 className="text-white text-xl font-semibold">Documentation</h2>
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray hover:text-primary transition-colors text-sm flex items-center gap-1"
                            >
                                View on GitHub <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray hover:text-white transition-colors"
                        aria-label="Close documentation"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                                <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
                                <p className="text-gray">Loading documentation...</p>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-12">
                            <p className="text-red-400 mb-4">{error}</p>
                            <p className="text-gray">Please check the GitHub repository for documentation.</p>
                        </div>
                    ) : (
                        <article className="prose prose-invert prose-gray max-w-none">
                            <ReactMarkdown
                                components={{
                                    h1: ({ children }) => (
                                        <h1 className="text-3xl font-bold text-white mb-4 pb-2 border-b border-gray/30">
                                            {children}
                                        </h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                            {children}
                                        </h3>
                                    ),
                                    p: ({ children }) => (
                                        <p className="text-gray leading-relaxed mb-4">
                                            {children}
                                        </p>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="list-none space-y-2 mb-4 ml-0">
                                            {children}
                                        </ul>
                                    ),
                                    li: ({ children }) => (
                                        <li className="text-gray flex items-start gap-2">
                                            <span className="text-primary mt-1">▹</span>
                                            <span>{children}</span>
                                        </li>
                                    ),
                                    code: ({ inline, children }: any) =>
                                        inline ? (
                                            <code className="bg-[#1e1e1e] text-primary px-2 py-1 rounded text-sm">
                                                {children}
                                            </code>
                                        ) : (
                                            <code className="block bg-[#1e1e1e] text-gray p-4 rounded overflow-x-auto font-mono text-sm">
                                                {children}
                                            </code>
                                        ),
                                    pre: ({ children }) => (
                                        <pre className="bg-[#1e1e1e] border border-gray/70 rounded p-4 overflow-x-auto mb-4">
                                            {children}
                                        </pre>
                                    ),
                                    a: ({ href, children }) => (
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            {children}
                                        </a>
                                    ),
                                    blockquote: ({ children }) => (
                                        <blockquote className="border-l-4 border-primary pl-4 italic text-gray my-4">
                                            {children}
                                        </blockquote>
                                    ),
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </article>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReadmeViewer;