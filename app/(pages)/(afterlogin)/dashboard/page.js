import "./styles.css";
import { UserButton } from "@clerk/nextjs";
import userProfileCompleted from "@/app/utils/userProfileCompleted";
import { redirect } from "next/navigation";
import CourseCard from "@/app/Components/Card_comp";

export default async function Home() {
  const isUser = await userProfileCompleted();
  if (!isUser) {
    return redirect("/decide");
  }

  const courses = [
    {
      image: "/images/2.png",
      subject: "Physics",
      description:
        "Learn the fundamentals of HTML including tags, attributes, and semantic markup.",
      price: 50,
      instructor: "Asish Sir",
    },
    {
      image: "/images/2.png",
      subject: "Chemistry",
      description:
        "Master CSS styling techniques such as selectors, box model, flexbox, and grid.",
      price: 50,
      instructor: "Asish Sir",
    },
    {
      image: "/images/2.png",
      subject: "Mathematics",
      description:
        "Explore the core concepts of JavaScript including variables, functions, and loops.",
      price: 50,
      instructor: "Asish Sir",
    },
    {
      image: "/images/2.png",
      subject: "React Development",
      description:
        "Build dynamic web applications with React.js, including state management.",
      price: 50,
      instructor: "Asish Sir",
    },
    {
      image: "/images/2.png",
      subject: "Next.js Essentials",
      description:
        "Discover the power of Next.js for server-side rendering, routing, and API integration.",
      price: 50,
      instructor: "Asish Sir",
    },
    {
      image: "/images/2.png",
      subject: "TypeScript",
      description:
        "Learn TypeScript to enhance the development of scalable web applications.",
      price: 50,
      instructor: "Asish Sir",
    },
  ];

  return (
    <div>
      <header className="dash_page">
        <h1>StudySphere</h1>
      </header>

      <nav>
        <UserButton userProfileUrl="/profile" />
        <a href="#">Profile</a>
        {/* <a href="#">About</a>
                <a href="#">Contact</a> */}
      </nav>
      <div className="container_dashboard">
        <h2 className="container-heading">Featured Courses</h2>
        <div className="course-list">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              subject={course.subject}
              description={course.description}
              price={course.price}
              instructor={course.instructor}
            />
          ))}
        </div>
      </div>

      <footer style={{ marginTop: "50px" }}>
        <p>&copy; 2024 Your Programming Course Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
