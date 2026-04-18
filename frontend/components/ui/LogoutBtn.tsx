"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logoutAdmin } from "@/hooks/useLogout";

export default function LogoutBtn() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleLogout() {
        setLoading(true);
        setError(null);

        try {
            await logoutAdmin();
            router.push("/login");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Logout failed.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            onClick={handleLogout}
            disabled={loading}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
        >
            {loading ? "Logging out..." : "Logout"}
        </button>
    );
}
