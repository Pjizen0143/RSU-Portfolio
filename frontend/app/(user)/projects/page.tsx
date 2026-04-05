import ProjectCard from "@/components/ui/projects/project-card";

export default function ProjectSection() {
    return (
        <section className="mx-6 mb-6">
            <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
}