import { getAllMovies } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async () => {
    const data = await getAllMovies();
    return NextResponse.json(data);
};