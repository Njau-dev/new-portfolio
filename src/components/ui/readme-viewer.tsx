"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ExternalLink, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { ReadmeViewerProps } from "@/types/project";

const ReadmeViewer = ({ githubUrl, readmeContent, projectTitle, onClose }: ReadmeViewerProps) => {
  const [content, setContent] = useState<string>(readmeContent || "");
  const [loading, setLoading] = useState(!readmeContent);
  const [error, setError] = useState<string | null>(null);

  const generateFallbackContent = useCallback(() => {
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
  }, [projectTitle, githubUrl]);

  useEffect(() => {
    if (readmeContent) {
      setContent(readmeContent);
      setLoading(false);
      return;
    }

    if (!githubUrl) return;

    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        // Extract owner and repo from GitHub URL
        const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) {
          throw new Error("Invalid GitHub URL");
        }

        const [, owner, repo] = match;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;

        const response = await fetch(apiUrl, {
          headers: {
            Accept: "application/vnd.github.v3.raw"
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch README");
        }

        const text = await response.text();
        if (!cancelled) setContent(text);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load documentation");
          // Fallback content
          setContent(generateFallbackContent());
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [githubUrl, readmeContent, generateFallbackContent]);

  return (
    <div className="bg-background/95 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-background border-gray/70 flex h-[85vh] w-full max-w-4xl flex-col border">
        {/* Header */}
        <div className="border-gray/70 flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-white">Documentation</h2>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray hover:text-primary flex items-center gap-1 text-sm transition-colors"
              >
                View on GitHub <ExternalLink size={14} />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray transition-colors hover:text-white"
            aria-label="Close documentation"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Loader2 className="text-primary mx-auto mb-4 h-8 w-8 animate-spin" />
                <p className="text-gray">Loading documentation...</p>
              </div>
            </div>
          ) : error ? (
            <div className="py-12 text-center">
              <p className="mb-4 text-red-400">{error}</p>
              <p className="text-gray">Please check the GitHub repository for documentation.</p>
            </div>
          ) : (
            <article className="prose prose-invert prose-gray max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="border-gray/30 mb-4 border-b pb-2 text-3xl font-bold text-white">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mt-8 mb-4 text-2xl font-bold text-white">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-6 mb-3 text-xl font-semibold text-white">{children}</h3>
                  ),
                  p: ({ children }) => <p className="text-gray mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => (
                    <ul className="mb-4 ml-0 list-none space-y-2">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{children}</span>
                    </li>
                  ),
                  code: ({ inline, children }: { inline?: boolean; children?: React.ReactNode }) =>
                    inline ? (
                      <code className="text-primary rounded bg-[#1e1e1e] px-2 py-1 text-sm">
                        {children}
                      </code>
                    ) : (
                      <code className="text-gray block overflow-x-auto rounded bg-[#1e1e1e] p-4 font-mono text-sm">
                        {children}
                      </code>
                    ),
                  pre: ({ children }) => (
                    <pre className="border-gray/70 mb-4 overflow-x-auto rounded border bg-[#1e1e1e] p-4">
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
                    <blockquote className="border-primary text-gray my-4 border-l-4 pl-4 italic">
                      {children}
                    </blockquote>
                  )
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
