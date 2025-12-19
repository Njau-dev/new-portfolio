"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
    target: number;
    duration?: number;
    monthsToYears?: boolean;
    postfix?: string;
    decimals?: number;
    className?: string;
};

export default function AnimatedCounter({
    target,
    duration = 1200,
    monthsToYears = false,
    postfix = "",
    decimals = 0,
    className = "",
}: AnimatedCounterProps) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof window === "undefined") return;

        const obs = new IntersectionObserver((entries) => {
            const e = entries[0];
            if (e.isIntersecting && !started.current) {
                started.current = true;
                const start = performance.now();

                const step = (ts: number) => {
                    const t = Math.min(1, (ts - start) / duration);
                    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
                    const current = eased * target;
                    setValue(current);
                    if (t < 1) requestAnimationFrame(step);
                };

                requestAnimationFrame(step);
                obs.disconnect();
            }
        }, { threshold: 0.2 });

        obs.observe(el);
        return () => obs.disconnect();
    }, [target, duration]);

    // formatter
    if (monthsToYears) {
        const monthsTotal = Math.round(value);
        const yrs = Math.floor(monthsTotal / 12);
        const months = monthsTotal % 12;
        return (
            <div ref={ref} className={className} aria-hidden>
                <span className="text-primary font-bold">{yrs}</span>
                <span className="text-gray ml-1">yr</span>
                <span className="text-primary font-bold ml-2">{months}</span>
                <span className="text-gray ml-1">mo</span>
            </div>
        );
    }

    const display = Number(value.toFixed(decimals));
    return (
        <div ref={ref} className={className} aria-hidden>
            <span className="text-primary font-bold">{display}</span>
            {postfix && <span className="text-primary font-bold ml-1">{postfix}</span>}
        </div>
    );
}
