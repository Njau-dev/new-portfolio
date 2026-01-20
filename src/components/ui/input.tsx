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
        className={`pointer-events-none absolute left-3 transition-all duration-200 ${
          focused || value
            ? "bg-background text-gray -top-2 px-1 text-xs"
            : "top-1/2 -translate-y-1/2 text-sm text-gray-400"
        } `}
      >
        {label}
      </label>

      {/* Input */}
      <input
        className="text-gray focus:border-gray w-full border border-gray-500 bg-transparent px-3 py-2 focus:outline-none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
