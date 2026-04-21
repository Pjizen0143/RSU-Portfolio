import {
    SiPython,
    SiFlutter,
    SiPostgresql,
    SiFastapi,
    SiTypescript,
    SiJavascript,
    SiGit,
    SiDocker,
    SiC,
    SiCplusplus,
    SiDart,
    SiMongodb,
    SiSqlite,
    SiNextdotjs,
    SiHtml5,
    SiCss,
    SiGithub,
    SiFigma,
} from "react-icons/si";

const skillGroups = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "C", icon: SiC, color: "#A8B9CC" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Dart", icon: SiDart, color: "#0175C2" },
            { name: "SQL", icon: null },
        ],
    },
    {
        title: "Backend & API",
        skills: [
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "RESTful API", icon: null },
            { name: "WebSocket", icon: null },
            { name: "JWT", icon: null },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "Next.js", icon: SiNextdotjs, color: "bg-primary" },
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss, color: "#1572B6" },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "SQLite", icon: SiSqlite, color: "#003B57" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "bg-primary" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        ],
    },
    {
        title: "Concepts",
        skills: [
            { name: "OOP", icon: null },
            { name: "Data Structures", icon: null },
            { name: "System Design (Basic)", icon: null },
        ],
    },
];

export default function SkillsSection() {
    return (
        <section className="mx-10 md:mx-20">
            <div className="flex items-baseline mb-1 gap-1">
                <h2 className="text-xl font-bold">Skills</h2>
                <span className="text-sm font-normal text-gray-500">.json</span>
            </div>
            <hr className="mb-3 border-primary opacity-30" />


            <div className="flex flex-col gap-5">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="border border-primary rounded-xl p-4"
                    >
                        <h3 className="text-sm font-semibold mb-3 text-primary">
                            {group.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill) => {
                                const Icon = skill.icon;

                                return (
                                    <div
                                        key={skill.name}
                                        className="flex cursor-default items-center gap-2 px-3 py-1.5 
                    border border-primary rounded-lg text-sm
                    hover:scale-105 transition"
                                    >
                                        {Icon && (
                                            <Icon size={16} color={skill.color} />
                                        )}
                                        <span>{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}