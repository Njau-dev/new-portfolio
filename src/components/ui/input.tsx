"use client";
import { InputProps } from "@/types";
import { useState } from "react";

export default function Input({ label }: InputProps) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="relative w-full">
            {/* Label */}
            <label
                className={`
          absolute left-3 transition-all duration-200 pointer-events-none
          ${focused || value
                        ? "-top-2 text-xs bg-background px-1 text-gray"
                        : "top-1/2 -translate-y-1/2 text-sm text-gray-400"}
        `}
            >
                {label}
            </label>

            {/* Input */}
            <input
                className="
          w-full bg-transparent border border-gray-500
          px-3 py-2 text-gray
          focus:outline-none focus:border-gray
        "
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
}
