import React from "react";
import { useFormStatus } from "react-dom";
import styles from "./Form.module.css";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className={styles.login}>
      <button
        className={`${pending ? styles.pending_btn : styles.active_btn}`}
        disabled={pending}
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default SubmitButton;
