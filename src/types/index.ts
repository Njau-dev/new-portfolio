export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    links: {
        demo?: string;
        cached?: string;
        github?: string;
    };
    accentColor?: string;
}

export interface ProjectCardProps {
    project: Project;
}

export interface MobileNavbarProps {
    navItems: Array<{ label: string; href: string }>;
    activeSection: string;
    onItemClick: (label: string) => void;
}

export interface HeaderLinkProps {
    label: string;
    href: string;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

export interface InputProps {
    label: string;
}

export interface SectionHeaderProps {
    title: string;
    className?: string;
}

export interface IconItem {
    href: string;
    label: string;
    Icon: any;
}

export interface SocialIconsProps {
    size?: number;
    className?: string;
    items?: IconItem[];
}

export interface Skill {
    id: number;
    category: string;
    skills: string[];
}

export interface SkillCardProps {
    skill: Skill;
}


export interface SectionProps {
    header: boolean;
}

export interface WorkExperience {
    id: string;
    company: string;
    position: string;
    period: string;
    location: string;
    type: 'employment';
    description: string[];
    technologies: string[];
    // Detailed page data
    overview: string;
    responsibilities: string[];
    achievements: string[];
    metrics?: {
        label: string;
        value: string;
        description: string;
    }[];
    images?: string[];
    teamSize?: string;
    duration?: string;
    website?: string;
}

export interface ClientProject {
    id: string;
    clientName: string;
    projectName: string;
    period: string;
    type: 'client';
    category: string; // e.g., "E-commerce", "Portfolio", "SaaS"
    description: string;
    technologies: string[];
    // Detailed page data
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
    metrics?: {
        label: string;
        value: string;
        description: string;
    }[];
    images?: string[];
    testimonial?: {
        text: string;
        author: string;
        role: string;
    };
    liveUrl?: string;
    caseStudyUrl?: string;
}

export interface WorkCardProps {
    work: WorkExperience;
    showLink?: boolean;
}


export interface ClientProjectCardProps {
    project: ClientProject;
}

export interface WorkDetailPageProps {
    params: {
        id: string;
    };
}

