import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="main-container">
      <div className="blur-circle1"></div>
      <div className="blur-circle2"></div>
      {/* Start Landing Page */}
      <div className="landing-page">
        <header>
          <div className="container-home">
            {/* <a href="#" className="logo">Your <b>Website</b></a> */}
            <Image
              src="/images/StudySphere_Logo.png"
              alt="Logo"
              width={150}
              height={150}
            />
            <ul className="links">
              {/* <li>Home</li> */}
              <li>About Us</li>
              {/* <li>Work</li> */}
              <li>Contact Us</li>
              <li>Our Achievements</li>
            </ul>
          </div>
        </header>
        <div className="content">
          <div className="container-home">
            <div className="info">
              <h1>Study Sphere</h1>
              <p>
                Unlock your potential with STUDYSPHERE: Where students connect
                with expert teachers in an immersive online learning experience.
              </p>

              <SignedOut>
                <div>
                  <Link href="/Sign-up">
                    <button>Signup</button>
                  </Link>
                  <Link href="/Sign-in">
                    <button style={{ marginLeft: "10px" }}>Signin</button>
                  </Link>
                </div>
              </SignedOut>

              <SignedIn>
                <Link href="/dashboard">
                  <button style={{ marginLeft: "10px" }}>Dashboard</button>
                </Link>
              </SignedIn>
            </div>
            <div className="image">
              <img
                className="main-image"
                src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"
                alt="Main"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Landing Page */}
    </div>
  );
};

export default Page;
