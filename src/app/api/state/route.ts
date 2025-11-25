import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://psmapi.thenoncoders.in/api/v1/get_location_bytype?typeid=1",
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
    console.error("State API error:", error);
    return NextResponse.json(
      { status: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
