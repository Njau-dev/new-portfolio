import { SectionHeaderProps } from '@/types';
import React from 'react';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <div className="flex items-center gap-4 mb-12 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {title}
            </h2>
            <div className="h-px bg-primary grow w-full" />
        </div>
    );
};

export default SectionHeader;