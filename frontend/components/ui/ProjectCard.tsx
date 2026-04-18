
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

type ProjectPreview = Pick<Project, "id" | "name" | "description">;

export default function ProjectCard({
    project,
    isAdmin = false,
    onDelete
}: {
    project: ProjectPreview;
    isAdmin?: boolean;
    onDelete?: () => void;
}) {
    const { deleteProject, loading, error } = useDeleteProject();
    const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

    const handleDelete = async () => {
        setDeleteTarget(project.id);

        try {
            await deleteProject(project.id);
            onDelete?.();
        } catch {
            // handled in hook
        } finally {
            setDeleteTarget(null);
        }
    };

    return (
        <div className="bg-bg/20 backdrop-blur-sm rounded-lg p-6 border border-primary">
            <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                {isAdmin && (
                    <button
                        type="button"
                        className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700 disabled:opacity-60"
                        onClick={handleDelete}
                        disabled={loading && deleteTarget === project.id}
                    >
                        {loading && deleteTarget === project.id ? "Deleting..." : "Delete"}
                    </button>
                )}
            </div>

            <p className="text-sm text-secondary mb-4">{project.description}</p>
            <a href="#" className="text-primary hover:underline">View Project</a>

            {error && (
                <p className="text-sm text-red-600 mt-2">
                    Delete error: {error}
                </p>
            )}
        </div>
    );
}