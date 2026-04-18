"use client";

import { forwardRef, Ref, useImperativeHandle } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { useProjects } from "@/hooks/useProjects";

interface Project {
    id: string;
    name: string;
    description: string;
    start_date: string;
    image: string;
}

interface ProjectListRef {
    refresh: () => void;
}

const ProjectList = forwardRef(
    ({ isAdmin = false }: { isAdmin?: boolean }, ref: Ref<ProjectListRef>) => {
        const { projects, loading, error, refreshProjects } = useProjects();

        useImperativeHandle(ref, () => ({
            refresh: refreshProjects,
        }));

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
);

ProjectList.displayName = "ProjectList";

export default ProjectList;
