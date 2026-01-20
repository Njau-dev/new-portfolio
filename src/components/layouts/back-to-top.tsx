"use client";

import { ArrowUpFromDot } from "lucide-react";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-background text-primary border-primary focus:ring-primary/50 focus:ring-offset-background fixed right-8 bottom-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUpFromDot />
        </button>
      )}
    </>
  );
}
