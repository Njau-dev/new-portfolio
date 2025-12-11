import React from 'react';
import { AppWindow, Smartphone, Terminal, Package, Code2 } from 'lucide-react';
import type { ProjectCategory } from '@/types/project';

export type IconOpts = {
  size?: number;
  className?: string;
};


export function getCategoryIcon(category: ProjectCategory | string, opts?: IconOpts): React.ReactElement {
  const { size = 20, className } = opts || {};

  switch (category) {
    case 'web':
      return <AppWindow size={size} className={className} />;
    case 'mobile':
      return <Smartphone size={size} className={className} />;
    case 'cli':
      return <Terminal size={size} className={className} />;
    case 'nocode':
      return <Package size={size} className={className} />;
    default:
      return <Code2 size={size} className={className} />;
  }
}

/**
 * Returns a human-readable label for a project category.
 * Useful for badges or accessibility text.
 */
export function getCategoryLabel(category: ProjectCategory | string): string {
  switch (category) {
    case 'web':
      return 'Web Application';
    case 'mobile':
      return 'Mobile Application';
    case 'cli':
      return 'CLI Tool';
    case 'nocode':
      return 'No-Code Solution';
    default:
      return 'Project';
  }
}