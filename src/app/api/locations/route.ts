import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const cityId = searchParams.get("city") || "1";

    const res = await fetch(
      `https://psmapi.thenoncoders.in/api/v1/get_subcategory?catid=${encodeURIComponent(cityId)}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.PSM_API_KEY as string,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    const mappedData = (data.data || []).map((loc: any) => ({
      subcategory_id: loc.subcategory_id,
      subcategory_detail: loc.subcategory_detail,
    }));

    return NextResponse.json({
      status: true,
      data: mappedData,
    });

  } catch (err) {
    console.error("Error fetching locations:", err);
    return NextResponse.json({
      status: false,
      data: [],
      error: "Failed to fetch locations",
    });
  }
}
