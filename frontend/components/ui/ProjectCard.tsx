"use client";

import { useState } from "react";
import { useDeleteProject } from "@/hooks/useDeleteProject";

interface Project {
    id: string;
    name: string;
    description: string;
    start_date: string;
    image: string;
}

export default function ProjectCard({ project, isAdmin = false, onDelete }: { project: Project; isAdmin?: boolean; onDelete?: () => void }) {
    const { deleteProject, loading, error } = useDeleteProject();
    const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

    const handleDelete = async () => {
        setDeleteTarget(project.id);

        try {
            await deleteProject(project.id);
            onDelete?.();
        } catch {
            // error state handled in hook
        } finally {
            setDeleteTarget(null);
        }
    };

    return (
        <div className="bg-bg/20 backdrop-blur-sm rounded-lg p-6 border border-primary relative">
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm text-secondary mb-4">{project.description}</p>
            <a href="#" className="text-primary hover:underline">View Project</a>

            {isAdmin && (
                <button
                    type="button"
                    className="absolute top-4 right-4 rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700 disabled:opacity-60"
                    onClick={handleDelete}
                    disabled={loading && deleteTarget === project.id}
                >
                    {loading && deleteTarget === project.id ? "Deleting..." : "Delete"}
                </button>
            )}

            {error && <p className="text-sm text-red-600 mt-2">Delete error: {error}</p>}
        </div>
    );
}