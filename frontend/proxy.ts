import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const sessionCookie = request.cookies.get("session")?.value;

    if (pathname.startsWith("/admin") && !sessionCookie) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (pathname === "/admin") {
        return NextResponse.redirect(new URL("/admin/inboxs", request.url));
    }

    if (pathname === "/login" && sessionCookie) {
        return NextResponse.redirect(new URL("/admin/inboxs", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/login"],
};