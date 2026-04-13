"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { useProjects } from "@/hooks/useProjects";

export default function ProjectList() {
    const { projects, loading, error } = useProjects();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>`{error}`</p>;
    if (!projects) return null;

    return (
        <>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </>
    );
}