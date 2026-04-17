"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/hooks/useLogin";

export default function AdminLoginForm() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            await loginAdmin(username, password);
            setSuccess(true);
            router.push("/admin");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="m-5" htmlFor="username">Username</label>
                <input className="m-5 border"
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <label className="m-5" htmlFor="password">Password</label>
                <input className="m-5 border"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button className="m-5" type="submit">Submit</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p>Login successful.</p>}
        </form>
    );
}
