// import { NextRequest } from "next/server";

import { NextResponse } from "next/server";


export async function POST(request) {
    const { email_id } = await request.json();
    console.log("From backend");
    console.log(email_id);
    return NextResponse.json({ email_id });
}