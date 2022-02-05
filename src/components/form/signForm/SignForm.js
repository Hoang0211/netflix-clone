import React, { useState, useRef } from "react";

import styles from "./SignForm.module.scss";

const SignForm = (props) => {
  const [firstNameOnFocus, setFirstNameOnFocus] = useState(false);
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);

  const firstNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const firstNameOnFocusHandler = () => {
    firstNameRef.current.focus();
    setFirstNameOnFocus(true);
  };

  const firstNameOnBlurHandler = () => {
    setFirstNameOnFocus(false);
  };

  const emailOnFocusHandler = () => {
    emailRef.current.focus();
    setEmailOnFocus(true);
  };

  const emailOnBlurHandler = () => {
    setEmailOnFocus(false);
  };

  const passwordOnFocusHandler = () => {
    passwordRef.current.focus();
    setPasswordOnFocus(true);
  };

  const passwordOnBlurHandler = () => {
    setPasswordOnFocus(false);
  };

  return (
    <form className={styles["sign-form"]}>
      <span className={styles.title}>
        {props.type === "signin" ? "Sign In" : "Sign Up"}
      </span>
      {props.type === "signup" && (
        <div
          className={`${styles["input-container"]} ${
            firstNameOnFocus ? styles.focus : styles.blur
          }`}
          onClick={firstNameOnFocusHandler}
        >
          <label htmlFor="firstName" className={styles.placeholder}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            ref={firstNameRef}
            onBlur={firstNameOnBlurHandler}
          ></input>
        </div>
      )}
      <div
        className={`${styles["input-container"]} ${
          emailOnFocus ? styles.focus : styles.blur
        }`}
        onClick={emailOnFocusHandler}
      >
        <label htmlFor="email" className={styles.placeholder}>
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          ref={emailRef}
          onBlur={emailOnBlurHandler}
        ></input>
      </div>
      <div
        className={`${styles["input-container"]} ${
          passwordOnFocus ? styles.focus : styles.blur
        }`}
        onClick={passwordOnFocusHandler}
      >
        <label htmlFor="password" className={styles.placeholder}>
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          ref={passwordRef}
          onBlur={passwordOnBlurHandler}
        ></input>
      </div>
      {props.type === "signin" ? (
        <button type="submit" className={styles["submit-btn"]}>
          Sign In
        </button>
      ) : (
        <button type="submit" className={styles["submit-btn"]}>
          Sign Up
        </button>
      )}
      <div className={styles["switch-option"]}>
        {props.type === "signin" ? (
          <>
            <span>New to Netflix? </span>
            <a href="#">Sign up now.</a>
          </>
        ) : (
          <>
            <span>Already a user? </span>
            <a href="#">Sign in now.</a>
          </>
        )}
      </div>
    </form>
  );
};

export default SignForm;
