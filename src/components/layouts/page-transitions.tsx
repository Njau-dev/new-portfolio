"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransitions({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Wrapper that fades in its children on mount. This avoids touching the
    // previous page (no fade-out). Each route change mounts a new wrapper
    // keyed by pathname so it can animate independently.
    function FadeInOnMount({ children }: { children: React.ReactNode }) {
        const [visible, setVisible] = useState(false);

        useEffect(() => {
            // Ensure we start hidden and then trigger fade-in on the next frame
            const raf = window.requestAnimationFrame(() => setVisible(true));
            return () => window.cancelAnimationFrame(raf);
        }, []);

        return (
            <div className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}>
                {children}
            </div>
        );
    }

    return (
        // Keyed by pathname so a new FadeInOnMount instance mounts for each route
        <div key={pathname}>
            <FadeInOnMount>{children}</FadeInOnMount>
        </div>
    );
}
