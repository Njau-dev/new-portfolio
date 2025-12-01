import React from 'react';
import { SkillCardProps } from '@/types';

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <div className="border border-gray bg-background backdrop-blur-sm">
            <div className="border-b border-gray p-4">
                <h3 className="text-white font-medium">{skill.category}</h3>
            </div>
            <div className="p-4">
                <p className="text-gray leading-relaxed">
                    {skill.skills.join(' . ')}
                </p>
            </div>
        </div>
    );
};

export default SkillCard;