"use client";

import { useState } from "react";
import { useContact } from "@/hooks/useContact";
import { useDeleteContact } from "@/hooks/useDeleteContact";

export default function ContactList() {
    const { contacts, loading, error, refreshContacts } = useContact();
    const { deleteContact, loading: deleting, error: deleteError } = useDeleteContact();
    const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        setDeleteTarget(id);

        try {
            await deleteContact(id);
            await refreshContacts();
        } catch {
            // error state handled in hook
        } finally {
            setDeleteTarget(null);
        }
    };

    if (loading) {
        return <p>Loading contacts...</p>;
    }

    if (error) {
        return <p>Error loading contacts: {error}</p>;
    }

    return (
        <div className="space-y-4">
            {contacts.map((contact) => (
                <div key={contact.id} className="rounded-lg border p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-semibold">{contact.id}: {contact.name}</h3>
                            <p className="text-sm text-slate-600">{contact.email}</p>
                        </div>
                        <button
                            type="button"
                            className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700 disabled:opacity-60"
                            onClick={() => handleDelete(contact.id)}
                            disabled={deleting && deleteTarget === contact.id}
                        >
                            {deleting && deleteTarget === contact.id ? "Deleting..." : "Delete"}
                        </button>
                    </div>
                    <p className="mt-3 text-slate-700">{contact.message}</p>
                    <hr className="mt-4" />
                </div>
            ))}
            {deleteError ? <p className="text-sm text-red-600">Delete error: {deleteError}</p> : null}
        </div>
    );
}