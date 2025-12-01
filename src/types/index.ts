export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[]; // e.g., ["HTML", "SCSS", "Python"]
    links: {
        demo?: string;
        cached?: string; // Specific to the "Cached >" button seen in the first card
        github?: string; // Assuming the empty purple box is a GitHub/Source link
    };
    accentColor?: string; // Optional: to handle specific background gradients if needed
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

