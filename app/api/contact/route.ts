import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  concern?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as ContactPayload;

  const errors: Record<string, string> = {};
  if (!body.fullName?.trim()) errors.fullName = "Full name is required";
  if (!body.company?.trim()) errors.company = "Company is required";
  if (!body.email?.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    errors.email = "Enter a valid email";
  if (!body.phone?.trim()) errors.phone = "Phone is required";
  if (!body.concern?.trim()) errors.concern = "Select a concern";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  console.log("[contact-form] submission received", body);

  return NextResponse.json({ ok: true });
}
