"use client";

import { FormEvent, useState } from "react";
import { useCreateProject } from "@/hooks/useCreateProject";

interface CreateProjectFormProps {
    onSuccess?: () => void;
}

export default function CreateProjectForm({ onSuccess }: CreateProjectFormProps) {
    const { createProject, loading, error } = useCreateProject();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isStar, setIsStar] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormError(null);
        setSuccess(false);

        if (!name.trim()) {
            setFormError("Project name is required");
            return;
        }

        try {
            await createProject({
                name,
                description,
                start_date: startDate,
                image_url: imageUrl,
                is_star: isStar,
            });

            setSuccess(true);
            setName("");
            setDescription("");
            setStartDate("");
            setImageUrl("");
            setIsStar(false);
            onSuccess?.();
        } catch (err) {
            setFormError(err instanceof Error ? err.message : "Failed to create project");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-bg p-4 rounded-md mb-6 border border-primary/20">
            <h2 className="text-lg font-bold mb-4">New Project</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div>
                    <label htmlFor="name" className="block text-xs font-medium mb-1">
                        Name *
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Project name"
                        className="w-full border border-primary/30 rounded px-2 py-1 text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="startDate" className="block text-xs font-medium mb-1">
                        Start Date
                    </label>
                    <input
                        id="startDate"
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full border border-primary/30 rounded px-2 py-1 text-sm "
                    />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="block text-xs font-medium mb-1">
                    Description
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="w-full border border-primary/30 rounded px-2 py-1 text-sm "
                    rows={2}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="imageUrl" className="block text-xs font-medium mb-1">
                    Image URL
                </label>
                <input
                    id="imageUrl"
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/image.png"
                    className="w-full border border-primary/30 rounded px-2 py-1 text-sm "
                />
            </div>

            <div className="mb-4">
                <label htmlFor="isStar" className="flex items-center gap-2">
                    <input
                        id="isStar"
                        type="checkbox"
                        checked={isStar}
                        onChange={(e) => setIsStar(e.target.checked)}
                        className="w-3 h-3 border border-primary/30 rounded"
                    />
                    <span className="text-xs font-medium">Star</span>
                </label>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-bg py-1.5 rounded text-sm hover:opacity-90 disabled:opacity-60"
            >
                {loading ? "Creating..." : "Create"}
            </button>

            {formError && (
                <p className="text-primary text-xs mt-2">{formError}</p>
            )}

            {error && (
                <p className="text-primary text-xs mt-2">Error: {error}</p>
            )}

            {success && (
                <p className="text-primary text-xs mt-2">✓ Created!</p>
            )}
        </form>
    );
}
