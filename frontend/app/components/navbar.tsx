const navItem = "p-4 m-3 bg-[#F5F8FB] hover:text-[#F5F8FB] hover:bg-[#1A1A1A] border rounded-lg transition-colors duration-300";

export default function Navbar() {
    return (
        <nav className="grid grid-cols-3 bg-[#F5F8FB] pt-7">
            {/* left */}
            <div className="flex justify-start pl-7">
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
                <a href="https://github.com/pjizen0143" target="_blank" rel="noopener noreferrer" className={navItem}>
                    GitHub
                </a>
            </div>
        </nav >
    );
}