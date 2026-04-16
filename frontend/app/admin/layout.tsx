import Link from 'next/link';
import LogoutBtn from "@/components/ui/LogoutBtn";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-10 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            <div className="flex gap-5 mt-10">
                <Link href="/admin/inboxs">
                    <button className="px-6 py-3">
                        Inboxs
                    </button>
                </Link>

                <Link href="/admin/projects">
                    <button className="px-6 py-3">
                        Projects
                    </button>
                </Link>
            </div>
            <footer>
                <LogoutBtn />
            </footer>
        </div>
    );
}