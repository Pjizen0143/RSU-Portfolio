export default function AboutPage() {
    return (
        <div className="mx-10 md:mx-20 py-10">

            {/* Title (center เหมือนเดิม แต่เพิ่ม balance) */}
            <div className="text-center mb-6">
                <h1 className="tracking-wide text-4xl md:text-5xl font-bold">
                    About Me
                </h1>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="h-px w-10 bg-primary opacity-40" />
                    <span className="text-xs text-gray-500">.md</span>
                    <div className="h-px w-10 bg-primary opacity-40" />
                </div>
            </div>

            {/* Intro */}
            <section className="mb-10 border border-primary/40 rounded-xl p-5 bg-bg/80 leading-relaxed 
                                hover:border-primary transition">
                <p>
                    Hi, I’m Phone,  Computer Engineering student who enjoys building real-world applications
                    and understanding how systems work end-to-end.
                </p>

                <p className="mt-3">
                    I focus on creating practical solutions, from designing APIs and managing data
                    to integrating features like notifications and user interaction.
                </p>

                <p className="mt-3">
                    Rather than focusing on just one part of development,
                    I enjoy connecting frontend and backend into a complete system.
                </p>
            </section>

            {/* Education */}
            <section className="mb-10">
                <div className="flex items-baseline mb-2">
                    <h2 className="text-xl font-bold">Education</h2>
                    <span className="text-xs text-gray-500">.json</span>
                </div>
                <hr className="border-primary opacity-30 mb-4" />

                <div className="border border-primary/40 rounded-xl p-5 space-y-4 bg-bg/80 text-sm
                                hover:border-primary transition">
                    <div>
                        <p className="font-semibold">
                            Computer Engineering Student
                        </p>
                        <p className="opacity-70 text-xs">
                            Rangsit University
                        </p>
                        <p className="text-xs">Expected Graduation: 2027</p>
                        <p className="text-xs">GPA: 3.46 / 4.0</p>
                    </div>

                    <div>
                        <p className="font-semibold">
                            Science & Mathematics Program
                        </p>
                        <p className="opacity-70 text-xs">
                            Angthong Pitthamaroj Witthayakhom School
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section>
                <div className="flex items-baseline mb-2">
                    <h2 className="text-xl font-bold">Contact</h2>
                    <span className="text-xs text-gray-500">.env</span>
                </div>
                <hr className="border-primary opacity-30 mb-4" />

                <div className="border border-primary/40 rounded-xl p-5 space-y-3 bg-bg/80 text-sm font-mono
                                hover:border-primary transition">
                    <p>
                        EMAIL ={" "}
                        <a
                            href="mailto:parabolic0143@gmail.com"
                            className="hover:opacity-70 hover:underline"
                        >
                            parabolic0143@gmail.com
                        </a>
                    </p>

                    <p>
                        PHONE ={" "}
                        <a
                            href="tel:+66840275948"
                            className="hover:opacity-70 hover:underline"
                        >
                            +66 0840275948
                        </a>
                    </p>

                    <p>LOCATION = Pathum Thani, Thailand</p>
                </div>
            </section>
        </div>
    );
}