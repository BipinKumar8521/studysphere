import "./styles.css";
import { UserButton } from "@clerk/nextjs";
import userProfileCompleted from "@/app/utils/userProfileCompleted";
import { redirect } from "next/navigation";

export default async function Home() {
  const isUser = await userProfileCompleted();
  if (!isUser) {
    return redirect("/decide");
  }

  return (
    <div>
      <header>
        <h1>StudySphere</h1>
      </header>

      <nav>
        <UserButton userProfileUrl="/profile" />
        <a href="#">Profile</a>
        {/* <a href="#">About</a>
                <a href="#">Contact</a> */}
      </nav>

      <footer style={{ marginTop: "50px" }}>
        <p>&copy; 2024 Your Programming Course Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
