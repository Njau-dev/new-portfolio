"use client";

import { SectionHeaderProps } from '@/types';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className = '', hero }) => {
    const letters = useMemo(() => Array.from(String(title)), [title]);
    const [mounted, setMounted] = useState(false);
    const [lineActive, setLineActive] = useState(false);
    const rootRef = useRef<HTMLDivElement | null>(null);

    // animation timings (ms)
    const letterDelay = 45; // stagger per letter
    const letterDuration = 360; // duration of each letter drop

    useEffect(() => {
        // Use IntersectionObserver to trigger the animation when header is scrolled into view
        const el = rootRef.current;
        if (!el || typeof window === 'undefined') return;

        let observer: IntersectionObserver | null = null;
        const onIntersect: IntersectionObserverCallback = (entries) => {
            const e = entries[0];
            if (e.isIntersecting) {
                setMounted(true);

                if (hero) {
                    const total = letters.length * letterDelay + letterDuration;
                    // small buffer then start line animation
                    const timer = window.setTimeout(() => setLineActive(true), total + 80);
                    // clear timer if observer cleans up early
                    (observer as IntersectionObserver).disconnect();
                    return () => window.clearTimeout(timer);
                }

                // disconnect after first trigger
                (observer as IntersectionObserver).disconnect();
            }
        };

        observer = new IntersectionObserver(onIntersect, { threshold: 0.2 });
        observer.observe(el);

        return () => {
            observer && observer.disconnect();
        };
    }, [letters.length, hero]);

    return (
        <div ref={rootRef} className={`flex items-center gap-4 mb-12 w-full ${className}`}>
            <h2 className="text-2xl md:text-3xl font-medium text-white w-fit shrink-0 lowercase">
                <span className="text-primary font-bold mr-1">#</span>
                <span className="inline-block align-middle">
                    {letters.map((char, i) => {
                        const delay = `${i * letterDelay}ms`;
                        const style: React.CSSProperties = {
                            display: 'inline-block',
                            transform: mounted ? 'translateY(0)' : 'translateY(-0.9rem)',
                            opacity: mounted ? 1 : 0,
                            transition: `transform ${letterDuration}ms cubic-bezier(.2,.9,.3,1) ${delay}, opacity ${Math.round(letterDuration * 0.9)}ms ${delay}`,
                            willChange: 'transform, opacity',
                        };

                        const content = char === ' ' ? '\u00A0' : char;

                        return (
                            <span aria-hidden key={`${char}-${i}`} style={style}>
                                {content}
                            </span>
                        );
                    })}
                </span>
            </h2>

            {hero ? (
                <div className="h-px bg-transparent grow w-full relative overflow-hidden">
                    <div
                        className="absolute left-0 top-0 h-full bg-primary"
                        style={{
                            width: lineActive ? '100%' : '0%',
                            transition: `width 420ms cubic-bezier(.2,.9,.3,1) ${letters.length * letterDelay + 120}ms`,
                        }}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default SectionHeader;