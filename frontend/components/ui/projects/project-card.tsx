export default function ProjectCard() {
    return (
        <div className="bg-bg/20 backdrop-blur-sm rounded-lg p-6 border border-primary">
            <h3 className="text-xl font-bold mb-2">Project Title</h3>
            <p className="text-sm text-secondary mb-4">A brief description of the project goes here.</p>
            <a href="#" className="text-primary hover:underline">View Project</a>
        </div>
    );
}