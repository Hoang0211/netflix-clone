import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import styles from "./RegForm.module.scss";

const RegForm = () => {
  return (
    <form className={styles["reg-form"]}>
      <span className={styles.text}>
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <div className={styles.inputs}>
        <input placeholder="Email address"></input>
        <button>
          <span>Get Started</span>
          <IoIosArrowForward className={styles.icon} />
        </button>
      </div>
    </form>
  );
};

export default RegForm;
