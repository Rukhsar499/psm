import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const state = searchParams.get("state");
  const loc_id = searchParams.get("loc_id");

  try {
    const response = await fetch(
      `https://psmapi.thenoncoders.in/api/v1/get_category_bystate?state=${state}&loc_id=${loc_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.PSM_API_KEY || "",
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: false, message: "Error loading cities" });
  }
}
