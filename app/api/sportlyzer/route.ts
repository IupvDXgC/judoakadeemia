import { NextRequest, NextResponse } from "next/server";

const SPORTLYZER_URL =
  "https://app.sportlyzer.com/crm/public.php/club/m3v*2/puppet/m3v*2";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const response = await fetch(SPORTLYZER_URL, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  const contentType = response.headers.get("Content-Type") ?? "application/json";

  return new NextResponse(text, {
    status: response.status,
    headers: { "Content-Type": contentType },
  });
}
