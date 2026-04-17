import ProjectCard from "@/components/ui/ProjectCard";
import ProjectList from "@/components/ui/ProjectList";

interface Project {
    id: string;
    name: string;
    description: string;
    start_date: string;
    image: string;
}

export default function ProjectSection() {
    return (
        <section className="mx-6 mb-6">
            <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* static card */}
                <ProjectCard
                    project={{
                        id: "static-1",
                        name: "Portfolio Website",
                        description: "My personal portfolio"
                    }}
                />

                {/* dynamic list */}
                <ProjectList />
            </div>
        </section>
    );
}