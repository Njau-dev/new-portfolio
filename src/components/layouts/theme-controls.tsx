"use client";

import React, { useEffect, useState } from "react";

type Theme = "dark" | "light";
type Accent = "purple" | "blue" | "green" | "orange";

const ACCENTS: Record<Accent, string> = {
    purple: "#C778DD",
    blue: "#6EB9FF",
    green: "#7EE787",
    orange: "#FFB86B",
};

const THEME_VARS: Record<Theme, { background: string; gray: string; white: string }> = {
    dark: { background: "#282C33", gray: "#ABB2BF", white: "#FFFFFF" },
    light: { background: "#F3F4F6", gray: "#374151", white: "#0F172A" },
};

const THEME_KEY = "preferred-theme";
const ACCENT_KEY = "preferred-accent";

export default function ThemeControls({ compact = false }: { compact?: boolean }) {
    const [theme, setTheme] = useState<Theme | null>(null);
    const [accent, setAccent] = useState<Accent>("purple");

    useEffect(() => {
        // initial load: read preference or system
        try {
            const savedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;
            const savedAccent = (window.localStorage.getItem(ACCENT_KEY) as Accent) || "purple";
            const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

            const initialTheme: Theme = savedTheme || (prefersDark ? "dark" : "light");
            setTheme(initialTheme);
            setAccent(savedAccent);
            applyTheme(initialTheme, savedAccent);
        } catch (e) {
            // ignore
        }
    }, []);

    function applyTheme(t: Theme, a: Accent) {
        const vars = THEME_VARS[t];
        document.documentElement.style.setProperty("--background", vars.background);
        document.documentElement.style.setProperty("--gray", vars.gray);
        document.documentElement.style.setProperty("--white", vars.white);
        document.documentElement.style.setProperty("--primary", ACCENTS[a]);
    }

    function toggleTheme() {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        window.localStorage.setItem(THEME_KEY, next);
        applyTheme(next, accent);
    }

    function pickAccent(a: Accent) {
        setAccent(a);
        window.localStorage.setItem(ACCENT_KEY, a);
        if (theme) applyTheme(theme, a);
    }

    if (theme === null) return null;

    const wrapperClass = compact ? "flex items-center gap-3" : "flex  flex-col items-center gap-4 border border-gray/30 p-3 rounded-md";

    return (
        <div className={wrapperClass}>
            {/* Theme toggle */}
            {/* <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className={`p-2 rounded-md border border-gray/30 hover:border-primary transition-colors bg-transparent ${compact ? 'text-sm' : ''}`}
                title="Toggle theme"
            >
                {theme === "dark" ? (
                    // sun icon for dark -> switch to light
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.05 6.05 5.64 4.64M18.36 5.64 16.95 7.05M6.34 17.66 4.93 19.07" />
                    </svg>
                ) : (
                    // moon icon for light -> switch to dark
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                )}
            </button> */}

            {/* Accent pickers */}
            <div className={`flex items-center ${compact ? 'gap-2' : 'flex-col gap-3'}`}>
                {(Object.keys(ACCENTS) as Accent[]).map((a) => (
                    <div key={a} className="relative group">
                        <button
                            aria-label={`Select ${a} accent`}
                            title={a}
                            onClick={() => pickAccent(a)}
                            className={`w-6 h-6 rounded-full border-2 ${accent === a ? 'border-white' : 'border-transparent'} shadow-sm`}
                            style={{ background: ACCENTS[a] }}
                        />

                        {/* tooltip: appears on hover */}
                        <span
                            aria-hidden
                            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background text-white text-xs px-2 py-1 rounded-md shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                        >
                            {a.charAt(0).toUpperCase() + a.slice(1)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
