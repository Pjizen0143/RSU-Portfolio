import Navbar from "../../components/layouts/navbar";

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            <main className="pt-40">
                {children}
            </main>
        </>
    );
}