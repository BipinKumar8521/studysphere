"use server";

import Student from "@/app/db/schema/student";
import Certificate from "@/app/db/schema/certificate";
import generateCertificate from "@/app/utils/generateCertificate";
import generateCertificateVerificationLink from "@/app/utils/generateCertificateVerificationLink";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "@/app/db/connectDB";

export async function GET(request) {
  await connectDB();
  const user = await currentUser(request);
  const currUser = await Student.findOne({
    email: user.emailAddresses[0].emailAddress,
  });

  if (!currUser) {
    return NextResponse.error(new Error("User not found"));
  }

  const isCertificate = await Certificate.findOne({ studentId: currUser._id });

  if (isCertificate) {
    const pdfBytes = isCertificate.pdfBytes;
    return NextResponse.json({ pdfBytes });
  }
  const verificationLink = await generateCertificateVerificationLink();

  const pdfBytes = await generateCertificate(currUser.name, verificationLink);

  try {
    const certificate = await Certificate.create({
      studentId: currUser._id,
      pdfBytes: pdfBytes,
      verificationLink: verificationLink,
    });
  } catch (err) {
    return NextResponse.error(err);
  }

  return NextResponse.json({ pdfBytes });
}
