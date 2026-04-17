"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { useProjects } from "@/hooks/useProjects";

interface Project {
    id: string;
    name: string;
    description: string;
    start_date: string;
    image: string;
}

export default function ProjectList({ isAdmin = false }: { isAdmin?: boolean }) {
    const { projects, loading, error, refreshProjects } = useProjects();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>`{error}`</p>;
    if (!projects) return null;

    return (
        <>
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id || index}
                    project={project}
                    isAdmin={isAdmin}
                    onDelete={refreshProjects}
                />
            ))}
        </>
    );
}