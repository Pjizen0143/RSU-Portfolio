import axios from "axios";
import { API_URL } from "../lib/env";

type LogoutResponse = {
    message: string;
};

export async function logoutAdmin(): Promise<void> {
    const response = await axios.post<LogoutResponse>(`${API_URL}/api/v1/logout/`, {}, {
        withCredentials: true,
    });

    if (!response.data?.message) {
        throw new Error("Logout response did not contain a message.");
    }
}
