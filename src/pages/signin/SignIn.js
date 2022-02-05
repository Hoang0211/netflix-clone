import React, { useState, useRef } from "react";

import bg from "../../assets/images/misc/home-bg.jpg";
import logo from "../../logo.svg";

import styles from "./SignIn.module.scss";

const SignIn = () => {
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
    <div className={styles.signin}>
      <img className={styles.bg} src={bg} alt="bg-img" />
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="netflix-logo" />
      </div>
      <form>
        <span className={styles.title}>Sign In</span>
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
        <button type="submit" className={styles["submit-btn"]}>
          Sign In
        </button>
        <div className={styles["signup"]}>
          <span>New to Netflix? </span>
          <a>Sign up now.</a>
        </div>
      </form>
      <div className={styles.footer}>
        <div className={styles["footer-container"]}>
          <span className={styles.top}>Questions? Call 0800 302 533</span>
          <ul className={styles["links-container"]}>
            <li className={styles.link}>FAQ</li>
            <li className={styles.link}>Help Centre</li>
            <li className={styles.link}>Terms of Uses</li>
            <li className={styles.link}>Privacy</li>
            <li className={styles.link}>Cookie Preferences</li>
            <li className={styles.link}>Corporate Information</li>
          </ul>
          <select className={styles.language}>
            <option>English</option>
            <option>Finnish</option>
            <option>Svenska</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
