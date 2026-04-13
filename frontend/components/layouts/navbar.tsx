import ThemeToggle from "../ui/ThemeBtn";
import ProfileCircle from "../ui/ProfileIcon";
import { GithubIcon } from "../ui/GithubIconBtn";

const navItem = "inline-block p-2 m-1 md:p-4 md:m-3 bg-bg/90 hover:shadow-md hover:scale-[1.05] md:hover:scale-[1.1] active:scale-[0.95] border rounded-lg transition-all duration-200 text-sm md:text-base"

export default function Navbar() {
    return (

        <nav className="grid grid-cols-2 ml:grid-cols-[1fr_2fr_1fr] bg-bg/20 backdrop-blur-sm pt-1 md:pt-3 items-center border-b border-primary">

            <div className="flex justify-start py-2 px-3 md:py-3 md:px-7 scale-90 md:scale-100 origin-left">
                <ProfileCircle />
            </div>

            <div className="hidden ml:flex justify-center py-3">
                <ul className="flex">
                    <li><a href="/" className={navItem}>Home</a></li>
                    <li><a href="/about" className={navItem}>About</a></li>
                    <li><a href="/projects" className={navItem}>Projects</a></li>
                    <li><a href="/contact" className={navItem}>Contact</a></li>
                </ul>
            </div>

            <div className="flex justify-end pr-3 md:pr-7">
                <ul className="flex items-center py-2 md:py-3">
                    <li className="mx-1 md:mx-3 scale-90 md:scale-100"><ThemeToggle /></li>
                    <li className="mr-1 md:mr-3 scale-90 md:scale-100">
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