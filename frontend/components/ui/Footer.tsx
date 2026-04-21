import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-24 px-10 md:px-20 py-10 border-t border-primary text-sm">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                {/* Left: Description */}
                <div className="max-w-md space-y-2">
                    <p className="font-mono text-xs opacity-50 tracking-wide">
                        portfolio.md
                    </p>

                    <p className="leading-relaxed font-sans text-[13px] opacity-80">
                        This portfolio was built with Next.js and Tailwind CSS,
                        showcasing my projects and skills. Feel free to explore and
                        reach out for opportunities.
                    </p>
                </div>

                {/* Right: Links */}
                <div className="flex flex-col items-start md:items-end gap-2">

                    <Link
                        href="/contact"
                        className="font-mono text-xs opacity-60 hover:opacity-100 transition tracking-wide"
                    >
                        contact.md →
                    </Link>

                    <Link
                        href="https://github.com/Pjizen0143/RSU-Portfolio"
                        target="_blank"
                        className="font-mono text-xs px-3 py-1 rounded-md border border-primary/70
                       hover:bg-primary hover:text-bg transition-all"
                    >
                        view-source.sh ↗
                    </Link>

                </div>

            </div>

            {/* Bottom */}
            <div className="mt-8 pt-4 border-t border-primary/30 flex flex-col md:flex-row justify-between items-center gap-2">

                <p className="text-xs font-mono opacity-50">
                    © {new Date().getFullYear()} Thanaphat Poolthrap
                </p>

                <p className="text-xs font-mono opacity-40">
                    built with next.js + tailwind
                </p>

            </div>

        </footer>
    );
}