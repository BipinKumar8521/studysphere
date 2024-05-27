import React from "react";
import "./style.css";
import { currentUser } from "@clerk/nextjs/server";
import Student from "@/app/db/schema/student";

const ProfilePage = async () => {
  const user = await currentUser();
  const currUser = await Student.findOne({
    email: user.emailAddresses[0].emailAddress,
  });

  console.log(currUser);
  if (!currUser) {
    return NextResponse.error(new Error("User not found"));
  }

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-details">
        <h2>Name : {currUser.name}</h2>

        <p>Email : {currUser.email}</p>
        <p>Class : {currUser.class}</p>
        <p>School/College Name : {currUser.schoolOrCollegeName}</p>
        <span>Subjects : </span>
        {currUser.subjects.map((subject) => (
          <p>{subject}</p>
        ))}
        <p> Target Exam : {currUser.targetExam}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
