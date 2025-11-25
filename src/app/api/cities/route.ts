import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const state = searchParams.get("state") || "";
    const loc_id = searchParams.get("loc_id") || "";

    const response = await fetch(
      `https://psmapi.thenoncoders.in/api/v1/get_category_bystate?state=${encodeURIComponent(state)}&loc_id=${encodeURIComponent(loc_id)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.PSM_API_KEY || "",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    const mappedCities = (data.data || []).map((city: any) => ({
      city_id: city.category_id,        // FIXED ID
      city_name: city.category_detail,  // FIXED LABEL
    }));

    return NextResponse.json({
      status: true,
      data: mappedCities,
    });

  } catch (error) {
    console.error("City API Error:", error);
    return NextResponse.json({
      status: false,
      data: [],
      message: "Error loading cities",
    });
  }
}
