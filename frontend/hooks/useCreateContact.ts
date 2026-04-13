"use client";

import axios from "axios";
import { useState } from "react";
import { API_URL } from "@/lib/env";

interface Contact {
    name: string;
    email: string;
    message: string;
}

export const useCreateContact = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createContact = async (data: Contact) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                `${API_URL}/api/v1/contacts/`,
                data
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

    return { createContact, loading, error };
};