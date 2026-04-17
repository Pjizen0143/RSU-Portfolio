"use client";

import axios from "axios";
import { useState } from "react";
import { API_URL } from "@/lib/env";

export const useDeleteProject = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteProject = async (id: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.delete(`${API_URL}/api/v1/projects/${id}/`);
            return response.data;
        } catch (err) {
            const message = (err as Error).message;
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { deleteProject, loading, error };
};