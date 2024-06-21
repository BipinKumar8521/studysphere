import React from "react";
import { useFormStatus } from "react-dom";
import styles from "./Form.module.css";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className={`${styles.login} `}>
      <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
    </div>
  );
};

export default SubmitButton;
