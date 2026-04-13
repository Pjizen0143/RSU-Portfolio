"use client";

import { useState } from "react";
import { useCreateContact } from "@/hooks/useCreateContact";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const { createContact, loading, error } = useCreateContact();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) return;

        try {
            await createContact({ name, email, message });

            setName("");
            setEmail("");
            setMessage("");

            alert("Message sent successfully!");
        } catch (err) {
        }
    };

    return (
        <section className="mx-auto mt-10 max-w-xl">
            <h2 className="text-sm mb-4 opacity-60 tracking-wide">
                contact.md
            </h2>

            <form
                onSubmit={handleSubmit}
                className="border border-primary rounded-lg p-4 space-y-4 bg-bg"
            >
                {/* Name */}
                <div>
                    <label className="block text-xs font-mono opacity-60 mb-1">
                        name_or_company:
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name..."
                        className="w-full bg-transparent border border-primary/50 rounded px-2 py-1 text-sm font-mono outline-none focus:border-primary"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-xs font-mono opacity-60 mb-1">
                        email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email..."
                        className="w-full bg-transparent border border-primary/50 rounded px-2 py-1 text-sm font-mono outline-none focus:border-primary"
                        required
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-xs font-mono opacity-60 mb-1">
                        message:
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        placeholder="Write your message..."
                        className="w-full bg-transparent border border-primary/50 rounded px-2 py-1 text-sm font-mono outline-none resize-none focus:border-primary"
                        required
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="font-mono text-xs px-3 py-1 border border-primary rounded hover:bg-primary hover:text-bg transition disabled:opacity-50"
                >
                    {loading ? "sending..." : "send_message.sh →"}
                </button>

                {error && (
                    <p className="text-red-500 text-xs">
                        {error}
                    </p>
                )}
            </form>
        </section>
    );
}