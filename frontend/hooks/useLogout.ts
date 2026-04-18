export async function logoutAdmin(): Promise<void> {
    // Remove token from localStorage
    localStorage.removeItem("auth_token");
}
