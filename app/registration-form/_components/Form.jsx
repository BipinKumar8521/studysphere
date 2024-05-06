"use server";

import React from "react";
import "./Form.css";
import { redirect } from "next/navigation";

const Form = ({ role }) => {
  if (role !== "1" && role !== "2") {
    redirect("/404");
  }

  const handleForm = (formData) => {
    "use server";

    console.log(formData);
    redirect("/dashboard");
  };

  return (
    <div className="container">
      <div className="login_box">
        <h1 className="form-heading">Fill the details</h1>
        <form action={handleForm}>
          <div className="input_box">
            <input
              name="role"
              type="text"
              value={role === "1" ? "Student" : "Teacher"}
              required
            />
            <label htmlFor="">Role</label>
          </div>
          <div className="input_box">
            <input name="name" type="text" required />
            <label htmlFor="">Name</label>
          </div>
          <div className="input_box select-container">
            <label for="">Class</label>
            <select name="class" id="" required>
              <option value="">Select Class</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
          <div className="input_box">
            <input name="school/college name" type="text" required />
            <label htmlFor="">School/College Name</label>
          </div>
          <div className="input_box">
            <input name="subjects" type="text" required />
            <label htmlFor="">Subjects</label>
          </div>
          <div className="input_box">
            <input name="target exam" type="text" required />
            <label htmlFor="">Target Exam</label>
          </div>
          <div className="login">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
