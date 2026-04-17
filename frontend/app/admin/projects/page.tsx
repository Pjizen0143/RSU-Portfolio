import ProjectList from "@/components/ui/ProjectList";

export default function ProjectsManagement() {
    return (
        <div className="mx-6 mb-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ProjectList isAdmin={true} />
            </div>
        </div>
    );
}