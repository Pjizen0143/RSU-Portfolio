"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") || "light";
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
    }, []);

    const toggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <button
            onClick={toggle}
            className="
            mx-7
            flex items-center justify-center
            w-10 h-10
            rounded-full
            bg-card text-text
            border border-primary

            cursor-pointer
            transition-all duration-200

            hover:scale-110
            hover:shadow-md

            active:scale-95
        "
        >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}