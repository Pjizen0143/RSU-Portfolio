import ProjectCard from "../ProjectCard";
import Link from "next/link";

export default function HightLightsProjects() {
    return (
        <section className="mx-10 md:mx-20 mb-6 text-sm">
            <div className="flex items-baseline mb-1 gap-1">
                <h2 className="text-xl font-bold">Hightlights Projects</h2>
                <span className="text-sm font-normal text-gray-500">.yaml</span>
            </div>
            <hr className="mb-3 border-primary opacity-30" />
            <ProjectCard project={{ id: "highlight-1", name: "Portfolio Website", description: "My personal portfolio" }} />
            <Link href="/projects" className="inline-block mt-4 px-4 py-2">
                All Projects →
            </Link>
        </section>
    );
}       