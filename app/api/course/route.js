import connectDB from '../../db/connectDB';
import Course from '../../db/schema/CourseSchema';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Connect to MongoDB
        connectDB();

        // Parse JSON data from request body
        const body = await request.json();
        console.log(body);

        // Extract necessary fields
        const { name, courseName, price, duration,role, description } = body;

        // Create a new course document
        const newCourse = new Course({
            name,
            courseName,
            price,
            duration,
            role,
            description
        });

        // Save course to the database
        await newCourse.save();

        // Return success response with newly created course data
        return NextResponse.json({ success: true, message: 'Course added successfully', data: newCourse }, { status: 200 });
    } catch (error) {
        // Handle errors
        console.error(error);
        return NextResponse.json({ success: false, message: 'Server Error' });
    }
}
