import axios from "axios";
import { API_URL } from "../lib/env";

type LoginResponse = {
    access_token: string;
    token_type: string;
};

export async function loginAdmin(username: string, password: string): Promise<void> {
    const response = await axios.post<LoginResponse>(`${API_URL}/api/v1/auth/token`, {
        username,
        password,
    });

    if (!response.data?.access_token || !response.data?.token_type) {
        throw new Error("Login response did not contain access token or token type.");
    }

    // Store token in localStorage
    localStorage.setItem("auth_token", response.data.access_token);
}
