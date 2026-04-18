import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Remove automatic redirects - authentication is handled client-side
    if (pathname === "/admin") {
        return NextResponse.redirect(new URL("/admin/inboxs", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/login"],
};