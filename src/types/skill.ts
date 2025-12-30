export interface Skill {
    id: number;
    category: string;
    skills: string[];
}

export interface SkillCardProps {
    skill: Skill;
}

export interface FunFact {
    id: number;
    text: string;
}