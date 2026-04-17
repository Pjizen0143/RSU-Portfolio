"use client";

import axios from "axios";
import { useState } from "react";
import { API_URL } from "@/lib/env";

export const useDeleteContact = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteContact = async (id: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.delete(`${API_URL}/api/v1/contacts/${id}/`);
            return response.data;
        } catch (err) {
            const message = (err as Error).message;
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { deleteContact, loading, error };
};