import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://psmapi.thenoncoders.in/api/v1/get_mastercategory", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.PSM_API_KEY || ""
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}