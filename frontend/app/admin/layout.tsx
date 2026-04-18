"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LogoutBtn from "@/components/ui/LogoutBtn";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    return (
        <div className="p-10 mx-auto">
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
            <LogoutBtn />
            <main>
                {children}
            </main>
        </div>
    );
}