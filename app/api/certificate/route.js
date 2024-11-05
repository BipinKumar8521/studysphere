"use server";

import Student from "@/app/db/schema/student";
import Certificate from "@/app/db/schema/certificate";
import generateCertificateVerificationLink from "@/app/utils/generateCertificateVerificationLink";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "@/app/db/connectDB";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";
import { createCanvas, loadImage } from "canvas";
import QRCode from "qrcode";

export async function GET(request) {
  try {
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
      console.log("User already has a certificate");
      return NextResponse.json({ filePath: pdfBytes });
    }

    const verificationLink = await generateCertificateVerificationLink();

    const name = "John Doe";
    const regNo = "123456";
    const institute = "Institute Name";
    const eventName = "Event Name";

    const uniqueId = uuidv4(); // Generate a unique identifier
    const fileName = `certificate_${uniqueId}.png`;
    const filePath = path.join("/tmp", "certificates", fileName);

    // Create the certificate directory if it doesn’t exist
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Load certificate template
    const template = await loadImage(
      path.join(process.cwd(), "public", "templates", "participation2024.png")
    );
    const canvas = createCanvas(template.width, template.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(template, 0, 0);

    // Add Registration Number
    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(`Reg. No.: ${regNo}`, 200, 250);

    // Add Participant Name
    ctx.fillText(`Mr./Ms. ${name}`, 220, 310);

    // Add Institute Name
    ctx.fillText(`the institute ${institute}`, 220, 360);

    // Add Event Name
    ctx.fillText(`in the ${eventName} event`, 220, 410);

    // Generate QR code
    const qrCodeDataURL = await QRCode.toDataURL(verificationLink, {
      width: 150,
    });
    const qrCodeImage = await loadImage(qrCodeDataURL);

    // Draw QR code with border
    const qrCodeSize = 150;
    const borderSize = 10;
    const qrX = 650;
    const qrY = 580;

    ctx.fillStyle = "#000000";
    ctx.fillRect(
      qrX - borderSize,
      qrY - borderSize,
      qrCodeSize + 2 * borderSize,
      qrCodeSize + 2 * borderSize
    );
    ctx.drawImage(qrCodeImage, qrX, qrY, qrCodeSize, qrCodeSize);

    // Save certificate to file
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(filePath, buffer);

    // Save certificate details to database
    const certi = await Certificate.create({
      studentId: currUser._id,
      pdfBytes: `/certificates/${fileName}`,
      verificationLink,
    });

    return NextResponse.json({
      message: "Certificate generated successfully",
      filePath: `/certificates/${fileName}`,
      certi,
    });
  } catch (err) {
    console.error("Error generating certificate:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
