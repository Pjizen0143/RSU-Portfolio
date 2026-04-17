
"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { API_URL } from "@/lib/env";

interface ContactInfo {
    id: string;
    name: string;
    email: string;
    message: string;
}

export const useContact = () => {
    const [contacts, setContacts] = useState<ContactInfo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchContacts = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get<ContactInfo[]>(`${API_URL}/api/v1/contacts/`);
            setContacts(response.data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    return { contacts, loading, error, refreshContacts: fetchContacts };
};