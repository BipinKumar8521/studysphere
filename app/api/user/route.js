import { NextResponse } from "next/server";

export async function POST(request) {
    const { email_id } = await request.json();
    console.log("From backend");
    console.log(email_id);
    
    const email = email_id;

    // try {
    //     const user = await User.create({ email });
    //     res.status(201).json({ success: true, data: user });
    // } catch (error) {
    //     res.status(400).json({ success: false, error: error.message });
    // }
    return NextResponse.json({ email_id });
}