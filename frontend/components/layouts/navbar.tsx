import ThemeToggle from "../ui/utils/theme-btn";
import ProfileCircle from "../ui/utils/profile-icon";
import { GithubIcon } from "../ui/utils/github-icon-btn";

const navItem = "inline-block p-4 m-3 bg-bg/90 hover:shadow-md hover:scale-[1.1] active:scale-[0.95] border rounded-lg transition-all duration-200"

export default function Navbar() {
    return (
        /* cols 3 in large screens, 2 in small screens */
        <nav className="grid grid-cols-2 ml:grid-cols-[1fr_2fr_1fr] bg-bg/20 backdrop-blur-sm pt-3 items-center border-b border-primary">

            {/* left */}
            <div className="flex justify-start py-3 px-7">
                <ProfileCircle />
            </div>

            {/* middle show only ml*/}
            <div className="hidden ml:flex justify-center py-3">
                <ul className="flex">
                    <li><a href="/" className={navItem}>Home</a></li>
                    <li><a href="/about" className={navItem}>About</a></li>
                    <li><a href="/projects" className={navItem}>Projects</a></li>
                    <li><a href="/contact" className={navItem}>Contact</a></li>
                </ul>
            </div>

            {/* right */}
            <div className="flex justify-end pr-7">
                <ul className="flex items-center py-3">
                    <li className="mx-3"><ThemeToggle /></li>
                    <li className="mr-3">
                        <GithubIcon />
                    </li>
                    <li className="ml:hidden">
                        <a href="/contact" className={navItem}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
