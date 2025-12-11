export type ProjectCategory = 'web' | 'mobile' | 'cli' | 'nocode';

export interface ProjectLinks {
    github?: string;
    live?: string;
    cached?: string;
    demo?: string;
    appStore?: string;
    playStore?: string;
}

export interface Collaborator {
    name: string;
    role: string;
    github?: string;
    linkedin?: string;
}

export interface CLICommand {
    command: string;
    description: string;
    example: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    category: ProjectCategory;
    links: ProjectLinks;

    // Detail page fields
    overview: string;
    features: string[];
    challenges?: string;
    solutions?: string;
    company?: string;
    companyUrl?: string;
    collaborators?: Collaborator[];
    duration?: string;
    role?: string;
    screenshots?: string[];

    // CLI specific fields
    cliCommands?: CLICommand[];
    readmeUrl?: string;
    readmeContent?: string;
    installCommand?: string;

    // Mobile specific fields
    platform?: 'iOS' | 'Android' | 'Cross-platform';

    // No-code specific fields
    noCodePlatform?: 'Wix' | 'Shopify' | 'Webflow' | 'Bubble' | 'Other';
}

export interface ReadmeViewerProps {
    githubUrl?: string;
    readmeContent?: string;
    projectTitle: string;
    onClose: () => void;
}

export interface CLIPlaygroundProps {
    commands: CLICommand[];
    projectTitle: string;
    installCommand?: string;
    githubUrl?: string;
    onClose: () => void;
    onOpenReadme?: () => void;
}