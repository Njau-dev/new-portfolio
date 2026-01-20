import React from "react";
import { SkillCardProps } from "@/types/skill";

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="border-gray bg-background border backdrop-blur-sm">
      <div className="border-gray border-b p-4">
        <h3 className="font-medium text-white">{skill.category}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray leading-relaxed">{skill.skills.join(" . ")}</p>
      </div>
    </div>
  );
};

export default SkillCard;
