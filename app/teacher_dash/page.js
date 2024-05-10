"use client"

// pages/index.js

import "./styles.css"
import { UserButton } from '@clerk/nextjs';
import Link from "next/link";
import { useRouter } from 'next/navigation';
export default function Home() {
    const router = useRouter();
    return (
        <div>


            <header>
                <h1>StudySphere</h1>
            </header>

            <nav>
                {/* <UserButton /> */}
                <a href="#">Add Course</a>
                {/* <a href="#">About</a>
                <a href="#">Contact</a> */}
            </nav>

            <div className="container">
                <h2 className="container-heading">Featured Courses</h2>
                <div className="course-list">
                    {/* HTML Course */}
                    <div className="course">
                        {/* unsplash img for html */}
                        <img src="https://source.unsplash.com/300x200/?physics, code" alt="Physics Course Image" />
                        <h2>Physics</h2>
                        <p>Learn the fundamentals of HTML including tags, attributes, and semantic markup.</p>
                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div><p>Price: $50</p> <p>Instructor: Asish Sir</p> </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5" onClick={() => router.push('/payment')}><span>Buy Now</span></button></div>
                        </div>
                    </div>
                    {/* CSS Course */}
                    <div className="course">
                        <img src="https://source.unsplash.com/300x200/?chemistry, code" alt="Chemistry Course Image" />
                        <h2>Chemistry</h2>
                        <p>Master CSS styling techniques such as selectors, box model, flexbox, and grid.</p>
                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div><p>Price: $50</p> <p>Instructor: Asish Sir</p> </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5" onClick={() => router.push('/payment')}><span>Buy Now</span></button></div>
                        </div>
                    </div>
                    {/* JavaScript Course */}
                    <div className="course">
                        <img src="https://source.unsplash.com/300x200/?mathematics, code" alt="Mathematics Course Image" />
                        <h2>Mathematics</h2>
                        <p>Explore the core concepts of JavaScript including variables, functions, and loops.</p>
                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div><p>Price: $50</p> <p>Instructor: Asish Sir</p> </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5" onClick={() => router.push('/payment')}><span>Buy Now</span></button></div>
                        </div>
                    </div>
                    {/* React Course */}
                    <div className="course">
                        <img src="https://source.unsplash.com/300x200/?react, code" alt="React Course Image" />
                        <h2>React Development</h2>
                        <p>Build dynamic web applications with React.js, including state management.</p>
                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div><p>Price: $50</p> <p>Instructor: Asish Sir</p> </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5" onClick={() => router.push('/payment')}><span>Buy Now</span></button></div>
                        </div>

                    </div>
                    {/* Next.js Course */}
                    <div className="course">
                        <img src="https://source.unsplash.com/300x200/?next.js, code" alt="Next.js Course Image" />
                        <h2>Next.js Essentials</h2>
                        <p>Discover the power of Next.js for server-side rendering, routing, and API integration.</p>
                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div><p>Price: $50</p> <p>Instructor: Asish Sir</p> </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5" onClick={() => router.push('/payment')}><span>Buy Now</span></button></div>
                        </div>
                    </div>
                    {/* TypeScript Course */}
                    <div className="course">
                        <img src="https://source.unsplash.com/300x200/?typescript, code" alt="TypeScript Course Image" />
                        <h2>TypeScript</h2>
                        <p>Learn TypeScript to enhance the development of scalable web applications.</p>
                        <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div><p>Price: $50</p> <p>Instructor: Asish Sir</p> </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}><button className="btn-5" onClick={() => router.push('/payment')}><span>Buy Now</span></button></div>
                        </div>
                    </div>
                </div>
            </div>

            <footer style={{ marginTop: '50px' }}>
                <p>&copy; 2024 Your Programming Course Website. All rights reserved.</p>
            </footer>
        </div>
    );
}
