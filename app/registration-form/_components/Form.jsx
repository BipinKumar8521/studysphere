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
          {role === "1" ? (
            <>
              <div className="input_box select-container">
                <label for="">Class</label>
                <select name="class" id="" required>
                  <option value="">Select Class</option>
                  <option value="5th">5th</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
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
            </>
          ) : (
            <>
              <div className="input_box select-container">
                <label for="">Highest Qualification</label>
                <select name="highest qualification" id="" required>
                  <option value="">Select </option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="Graduation">Graduation</option>
                </select>
              </div>
              <div className="input_box select-container">
                <label for="">Teaching Interest</label>
                <select name="teaching interest" id="" required>
                  <option value="">Select </option>
                  <option value="Below 10th">Below 10th</option>
                  <option value="10th">10th</option>Below
                  <option value="12th-CBSE">12th-CBSE</option>
                  <option value="12th-JEE">12th-JEE</option>
                  <option value="12th-NEET">12th-NEET</option>{" "}
                </select>
              </div>
              <div className="input_box select-container">
                <label for="">Experience Level</label>
                <select name="experience level" id="" required>
                  <option value="">Select </option>
                  <option value="0 Yr">0 Yr</option>
                  <option value="1 Yr">1 Yr</option>Below
                  <option value="2 Yr">2 Yr</option>
                  <option value="3-5 Yr">3-5 Yr</option>
                  <option value="More than 5 Yr">More than 5 Yr</option>{" "}
                </select>
              </div>
            </>
          )}

          <div className="login">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
