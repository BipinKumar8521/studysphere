"use client";

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import styles from "./Form.module.css";
import SubmitButton from "./SubmitButton";

const Form = ({ role, handleSubmitForm }) => {
  if (role !== "1" && role !== "2") {
    redirect("/404");
  }
  const [name, setName] = useState("");

  const user = useUser();

  useEffect(() => {
    console.log(user);
    if (!user) {
      redirect("/sign-in");
    } else if (user.user) {
      setName(user.user.fullName);
      console.log(name);
    }
  }, [user]);

  let inputFields;
  if (role === "1") {
    inputFields = (
      <>
        <div className={`${styles.input_box} ${styles.select_container}`}>
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
        <div className={styles.input_box}>
          <input name="school/college name" type="text" required />
          <label htmlFor="">School/College Name</label>
        </div>
        <div className={styles.input_box}>
          <input name="subjects" type="text" required />
          <label htmlFor="">Subjects</label>
        </div>
        <div className={styles.input_box}>
          <input name="target exam" type="text" required />
          <label htmlFor="">Target Exam</label>
        </div>
      </>
    );
  } else {
    inputFields = (
      <>
        <div className={`${styles.input_box} ${styles.select_container}`}>
          <label for="">Highest Qualification</label>
          <select name="highest qualification" id="" required>
            <option value="">Select </option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Graduation">Graduation</option>
          </select>
        </div>
        <div className={`${styles.input_box} ${styles.select_container}`}>
          <label for="">Teaching Interest</label>
          <select name="teaching interest" id="" required>
            <option value="">Select </option>
            <option value="Below 10th">Below 10th</option>
            <option value="10th">10th</option>
            <option value="12th-CBSE">12th-CBSE</option>
            <option value="12th-JEE">12th-JEE</option>
            <option value="12th-NEET">12th-NEET</option>{" "}
          </select>
        </div>
        <div className={`${styles.input_box} ${styles.select_container}`}>
          <label for="">Experience Level</label>
          <select name="experience level" id="" required>
            <option value="">Select </option>
            <option value="0 Yr">0 Yr</option>
            <option value="1 Yr">1 Yr</option>
            <option value="2 Yr">2 Yr</option>
            <option value="3-5 Yr">3-5 Yr</option>
            <option value="More than 5 Yr">More than 5 Yr</option>{" "}
          </select>
        </div>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h1 className={styles.form_heading}>Fill your details</h1>
        <form action={handleSubmitForm}>
          <div className={styles.role_input}>
            <p>Role</p>
            <input
              type="radio"
              name="role"
              id="student"
              checked={role === "1"}
            />
            <label htmlFor="Student">Student</label>
            <input
              type="radio"
              name="role"
              id="teacher"
              checked={role === "2"}
            />
            <label htmlFor="Teacher">Teacher</label>
          </div>
          <div className={styles.input_box}>
            <input name="name" type="text" defaultValue={name} required />
            <label htmlFor="">Name</label>
          </div>
          {inputFields}
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default Form;
