"use client";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import IconButton from "./IconBtn";

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
        <IconButton onClick={toggle} className="mx-2">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </IconButton>
    );
}