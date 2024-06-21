import React from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import userProfileCompleted from "@/app/utils/userProfileCompleted";

import Home from "./Components/testimnial/page";
import LogoSlider from "./Components/logoslider/page";

const Page = async () => {
  const isUser = await userProfileCompleted();
  return (
    <>
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
                <li><a href="#slider">Our Achievements</a></li>
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
                      <button className="btn-5">Signup</button>
                    </Link>
                    <Link href="/Sign-in">
                      <button
                        style={{ marginLeft: "10px", marginTop: "10px" }}
                        class="btn-5"
                      >
                        Signin
                      </button>
                    </Link>
                  </div>
                </SignedOut>

                {isUser ? (
                  <SignedIn>
                    <Link href="/dashboard">
                      <button style={{ marginLeft: "10px" }} className="btn-5">
                        Dashboard
                      </button>
                    </Link>
                    <SignOutButton
                      style={{ marginLeft: "10px" }}
                      className="btn-5"
                    />
                  </SignedIn>
                ) : (
                  <SignedIn>
                    <h3 style={{ color: "red", margin: "10px" }}>
                      Your profile is incomplete
                    </h3>
                    <Link href="/decide">
                      <button style={{ marginLeft: "10px" }} className="btn-5">
                        Complete Profile
                      </button>
                    </Link>
                    <SignOutButton
                      style={{ marginLeft: "10px" }}
                      className="btn-5"
                    />
                  </SignedIn>
                )}
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
      <section id="slider">
        <Home />
        <LogoSlider />
      </section>
    </>
  );
};

export default Page;
