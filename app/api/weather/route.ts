import { NextRequest } from "next/server";

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city") || "kathmandu";

  if (!API_KEY) {
    return Response.json({ error: "Missing API key" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return Response.json(
        { error: errorData.message || "Failed to fetch weather" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json({ error: "Server error " }, { status: 500 });
  }
}
