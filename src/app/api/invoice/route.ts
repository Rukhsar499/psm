export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
//   const order_id = searchParams.get("order_id");

  const res = await fetch(
    `https://psmapi.thenoncoders.in/api/v1/get_order_detail?order_id=99`,
    {
     method: "GET",
      headers: {
        "Content-Type": "application/json",
         "x-api-key": process.env.PSM_API_KEY || "",
      }
    }
  );

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
