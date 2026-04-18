import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userAgent, referrer } = body;

    // Get IP address
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      request.ip ||
      "unknown";

    // Get location data
    let locationData = {
      city: "Unknown",
      country: "Unknown",
      region: "Unknown",
    };
    if (ip !== "unknown") {
      try {
        const locationRes = await fetch(`http://ip-api.com/json/${ip}`);
        if (locationRes.ok) {
          locationData = await locationRes.json();
        }
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    }

    // Prepare notification message
    const message = `
New visitor details:
- IP Address: ${ip}
- Location: ${locationData.city}, ${locationData.region}, ${locationData.country}
- User Agent: ${userAgent}
- Referrer: ${referrer || "Direct"}
- Timestamp: ${new Date().toISOString()}
    `.trim();

    // Send notification email using formsubmit.co
    const FORM_SUBMIT_URL =
      "https://formsubmit.co/ajax/mohitjalan947@gmail.com";
    const response = await fetch(FORM_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "Portfolio Visitor Notification",
        email: process.env.NEXT_PUBLIC_EMAIL,
        message,
        _subject: "New Portfolio Visitor Alert",
        _template: "table",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send notification email");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in notify-visit:", error);
    return NextResponse.json(
      { error: "Failed to process notification" },
      { status: 500 },
    );
  }
}
