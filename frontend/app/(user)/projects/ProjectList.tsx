"use client";

import ProjectCard from "@/components/ui/projects/project-card";
import { useProjects } from "@/hooks/useProjects";

export default function ProjectList() {
    const { projects, loading, error } = useProjects();
    return (
        <>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </>
    );
}