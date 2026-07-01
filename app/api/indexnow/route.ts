import { NextResponse } from "next/server";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "calkuz2026indexnow";

export async function POST(request: Request) {
  const { urls } = await request.json();

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: "calk.uz",
      key: INDEXNOW_KEY,
      keyLocation: `https://calk.uz/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });

  return NextResponse.json({ status: response.status, submitted: urls.length });
}

export async function GET() {
  return NextResponse.json({ key: INDEXNOW_KEY, status: "ready" });
}
