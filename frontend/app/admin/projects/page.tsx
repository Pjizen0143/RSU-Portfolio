"use client";

import { useRef } from "react";
import ProjectList from "@/components/ui/ProjectList";
import CreateProjectForm from "@/components/ui/CreateProjectForm";

export default function ProjectsManagement() {
    const projectListRef = useRef<{ refresh: () => void } | null>(null);

    const handleProjectCreated = () => {
        projectListRef.current?.refresh?.();
    };

    return (
        <div className="mx-6 mb-6">
            <CreateProjectForm onSuccess={handleProjectCreated} />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ProjectList ref={projectListRef} isAdmin={true} />
            </div>
        </div>
    );
}