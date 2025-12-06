import { SectionHeaderProps } from '@/types';
import React from 'react';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className, hero }) => {
    return (
        <div className={` flex items-center gap-4 mb-12 w-full ${className}`}>
            <h2 className="text-2xl md:text-3xl font-medium text-white w-fit shrink-0 lowercase">
                <span className='text-primary font-bold'># </span>{title}
            </h2>
            {hero ? <div className="h-px bg-primary grow w-full" /> : null}
        </div>
    );
};

export default SectionHeader;