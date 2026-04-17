"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { API_URL } from "@/lib/env";

interface Project {
    id: string;
    name: string;
    description: string;
    start_date: string;
    image: string;
}


export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = useCallback(async () => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/projects/?skip=0&limit=10`);
            setProjects(response.data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    return { projects, loading, error, refreshProjects: fetchProjects };
};
