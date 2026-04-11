import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            id: 1,
            name: "Portfolio Website",
            description: "My personal portfolio",
            start_date: "2025-01-01",
            image: "/images/project1.png",
        },
        {
            id: 2,
            name: "E-commerce Website",
            description: "Online store for selling products",
            start_date: "2025-02-01",
            image: "/images/project2.png",
        },
        {
            id: 3,
            name: "Blog Platform",
            description: "A platform for writing and sharing blog posts",
            start_date: "2025-03-01",
            image: "/images/project3.png",
        }
    ]);
}