"use client";

import axios from "axios";
import { useState } from "react";
import { API_URL } from "@/lib/env";

interface ProjectInput {
    name: string;
    description: string;
    start_date: string;
    image_url: string;
    is_star: boolean;
}

export const useCreateProject = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createProject = async (data: ProjectInput) => {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("auth_token");
        if (!token) {
            throw new Error("No authentication token found");
        }

        try {
            // Convert start_date to ISO format if provided
            const payload = {
                ...data,
                start_date: data.start_date ? new Date(data.start_date).toISOString() : null,
            };

            const response = await axios.post(
                `${API_URL}/api/v1/projects/`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            return response.data;
        } catch (err) {
            const message = (err as Error).message;
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { createProject, loading, error };
};
