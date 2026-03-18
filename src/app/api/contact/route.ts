import { NextResponse } from "next/server";

interface ContactPayload {
  type: "individual" | "business";
  name: string;
  email: string;
  website?: string;
  [key: string]: unknown;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot: if filled, silently accept (spam trap)
    if (body.website) {
      return NextResponse.json({ success: true, message: "Thank you for your submission." });
    }

    // Validate required fields
    if (!body.name || typeof body.name !== "string" || body.name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 },
      );
    }

    if (!body.email || typeof body.email !== "string" || !EMAIL_RE.test(body.email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 },
      );
    }

    if (!body.type || !["individual", "business"].includes(body.type)) {
      return NextResponse.json(
        { success: false, error: "Invalid consultation type." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (resendApiKey) {
      // Production: send emails via Resend
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      // Notification email to site owner
      await resend.emails.send({
        from: "XPRSV Tech <notifications@xprsvtech.com>",
        to: contactEmail || "hello@xprsvtech.com",
        subject: `New ${body.type} consultation request from ${body.name.trim()}`,
        text: `New ${body.type} consultation request:\n\nName: ${body.name.trim()}\nEmail: ${body.email.trim()}\n\nFull submission:\n${JSON.stringify(body, null, 2)}`,
      });

      // Confirmation email to submitter
      await resend.emails.send({
        from: "XPRSV Tech <hello@xprsvtech.com>",
        to: body.email.trim(),
        subject: "Your XPRSV Tech consultation request",
        text: `Hi ${body.name.trim()},\n\nThank you for your interest in XPRSV Tech! I've received your ${body.type} consultation request and will review it shortly.\n\nI'll reach out within 24 hours to schedule our session.\n\nBest,\nTravis Brown\nXPRSV Tech`,
      });
    } else {
      // Dev mode: log to console
      console.log("--- Contact Form Submission ---");
      console.log("Type:", body.type);
      console.log("Name:", body.name.trim());
      console.log("Email:", body.email.trim());
      console.log("Full payload:", JSON.stringify(body, null, 2));
      console.log("--- End Submission ---");
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been received. I'll be in touch within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
