"use client";

import { useEffect, useState } from "react";

interface Project {
    id: number;
    name: string;
    description: string;
    start_date: string;
    image: string;
}


export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data: Project[] = await response.json();
                setProjects(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
};
