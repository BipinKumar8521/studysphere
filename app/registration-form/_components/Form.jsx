import React from "react";
import "./Form.css";
import { redirect } from "next/navigation";

const Form = ({role}) => {

    if(role !== "1" && role !== "2"){
      redirect("/404");
    }
    
  return (
    <div className="container">
      <div className="login_box">
        <h1>Fill the details</h1>
        <form action="">
          <div className="input_box">
            <input type="text" required />
            <label htmlFor="">Name</label>
          </div>
          <div className="input_box">
            {/* <label for="">Class</label> */}
            <select name="" id="">
              <option value="">Select Class</option>
              <option value="">1st</option>
              <option value="">2nd</option>
              <option value="">3rd</option>
              <option value="">4th</option>
              <option value="">5th</option>
              <option value="">6th</option>
              <option value="">7th</option>
              <option value="">8th</option>
              <option value="">9th</option>
              <option value="">10th</option>
              <option value="">11th</option>
              <option value="">12th</option>
            </select>
          </div>
          <div className="input_box">
            <input type="text" required />
            <label htmlFor="">School/College Name</label>
          </div>
          <div className="input_box">
            <input type="text" required />
            <label htmlFor="">Subjects</label>
          </div>
          <div className="input_box">
            <input type="text" required />
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
