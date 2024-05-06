import Link from "next/link";
import "./styles.css"; // Import the CSS file
import Image from "next/image"; // Import the next/image component
import { auth, currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  console.log(userId);
  const user = await currentUser();
  console.log(user);

  console.log(user.emailAddresses[0].emailAddress);
  const email_id = user.emailAddresses[0].emailAddress;

  const response = await axios.post("http://localhost:3000/api/user", {
    email_id: email_id,
  });

  return (
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
                Welcome, esteemed educator! As a teacher, you hold the power to
                inspire, educate, and shape the minds of tomorrow.
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
          </div>
        </div>
      </div>
      <Link href="/registration-form/1">
        <button className="designful-button">Join as a Student</button>
      </Link>
    </div>
  );
}
