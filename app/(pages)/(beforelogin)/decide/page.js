import Link from "next/link";
import "./styles.css"; // Import the CSS file
import Image from "next/image"; // Import the next/image component
import { redirect } from "next/navigation";
import userProfileCompleted from "@/app/utils/userProfileCompleted";
export default async function Home() {
  const isUser = await userProfileCompleted();
  console.log(isUser);

  if (isUser) {
    //redirect to /dashboard
    console.log("redirected");
    return redirect("/dashboard");
  }

  return (
    <>
      <header className="landing-page">
        <div className="container-home">
          <h1>Which role best describes you?</h1>
        </div>
      </header>
      <div className="container_decide">
        <div className="cards_decide">
          <div className="imgBx_decide">
            {/* <img src=" https://www.shutterstock.com/image-vector/cute-male-teacher-cartoon-character-260nw-2342219157.jpg" /> */}
            <Image src="/images/30.png" alt="Logo" width={150} height={150} />
          </div>
          <div className="content_decide">
            <div className="details_decide">
              <h2>
                <span>
                  Welcome, esteemed educator! As a teacher, you hold the power
                  to inspire, educate, and shape the minds of tomorrow.
                </span>
              </h2>
              <Link href="/registration-form/2">
                <button className="designful-button">Join as a Teacher</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="cards_decide">
          <div className="imgBx_decide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-9hjHUZvGyX8GT4ly3b168-S0EYr8tdvvA2ZV2MwhQ&s" />
          </div>
          <div className="content_decide">
            <div className="details_decide">
              <h2>
                <span>
                  Unlock the doors to knowledge and endless possibilities as you
                  embark on your educational journey
                </span>
              </h2>
              <Link href="/registration-form/1">
                <button className="designful-button">Join as a Student</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
