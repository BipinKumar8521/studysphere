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

        <h3>Email : {currUser.email}</h3>
        <h3>Class : {currUser.class}</h3>
        <h3>School/College Name : {currUser.schoolOrCollegeName}</h3>
        <h3>Subjects : </h3>
        {currUser.subjects.map((subject) => (
          <h3 key={subject}>{subject}</h3>
        ))}
        <h3> Target Exam : {currUser.targetExam}</h3>
      </div>
    </div>
  );
};

export default ProfilePage;
