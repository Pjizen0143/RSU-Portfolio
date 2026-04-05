import ThemeToggle from "./theme-btn";
import ProfileCircle from "./profile";

const navItem = "inline-block p-4 m-3 bg-bg hover:shadow-md hover:scale-[1.1] border rounded-lg transition-all duration-200"


export default function Navbar() {
    return (
        <nav className="grid grid-cols-3 bg-bg pt-3">
            {/* left */}
            <div className="flex justify-start pl-7">
                <ProfileCircle />
            </div>

            {/* mjid */}
            <ul className="flex justify-center pt-7">
                <li><a href="/" className={navItem}>Home</a></li>
                <li><a href="/about" className={navItem}>About</a></li>
                <li><a href="/projects" className={navItem}>Projects</a></li>
                <li><a href="/contact" className={navItem}>Contact</a></li>
            </ul>

            {/* right */}
            <div className="flex justify-end pr-7">
                <ul className="flex items-center pt-7">
                    <li>
                        <ThemeToggle />
                    </li>
                    <li>
                        <a href="https://github.com/pjizen0143" target="_blank" rel="noopener noreferrer" className={navItem}>
                            GitHub
                        </a>
                    </li>
                </ul>

            </div>
        </nav >
    );
}