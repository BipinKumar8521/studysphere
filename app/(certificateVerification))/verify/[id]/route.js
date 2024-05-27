import connectDB from "@/app/db/connectDB";
import Certificate from "@/app/db/schema/certificate";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDB();
  const isCertificate = await Certificate.findOne({
    verificationLink: request.url,
  });

  return NextResponse.json({ verificationStatus: !!isCertificate });
}
