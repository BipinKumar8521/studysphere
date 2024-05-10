"use server";

import connectDB from "@/app/db/connectDB";
import Teacher from "@/app/db/schema/teacher";
import { NextResponse } from "next/server";

//GET request
export async function GET(request) {
  await connectDB();

  return NextResponse.json({ message: "Hello from the backend" });
}

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    await Teacher.create(data);
    return NextResponse.json({
      message: "successfully created",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
