import { getMovieById } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = async (request,{ params }) => {
  const { id } = params;
  const data = await getMovieById(id);

  return NextResponse.json(data);
};
