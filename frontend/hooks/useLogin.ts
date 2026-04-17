import axios from "axios";
import { API_URL } from "../lib/env";

type LoginResponse = {
    message: string;
};

export async function loginAdmin(username: string, password: string): Promise<void> {
    const response = await axios.post<LoginResponse>(`${API_URL}/api/v1/login/`, {
        username,
        password,
    }, {
        withCredentials: true,
    });

    if (!response.data?.message) {
        throw new Error("Login response did not contain a message.");
    }
}
