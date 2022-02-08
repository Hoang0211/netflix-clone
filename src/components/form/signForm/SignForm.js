import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import useInput from "../../../hooks/use-input";

import FirebaseContext from "../../../store/firebase-context";

import styles from "./SignForm.module.scss";

const validateFirstName = (value) => value.trim() !== "";
const validateEmail = (value) => value.length > 4;
const validatePassword = (value) => value.length > 5;

const SignForm = (props) => {
  const firebaseCtx = useContext(FirebaseContext);
  const navigate = useNavigate();

  const firstNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    display: firstNameIsDisplay,
    inputFocusHandler: firstNameFocusHandler,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(validateFirstName, firstNameRef);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    display: emailIsDisplay,
    inputFocusHandler: emailFocusHandler,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail, emailRef);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    display: passwordIsDisplay,
    inputFocusHandler: passwordFocusHandler,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(validatePassword, passwordRef);

  let formIsValid = false;

  if (props.type === "signin") {
    if (emailIsValid && passwordIsValid) {
      formIsValid = true;
    }
  } else {
    if (firstNameIsValid && emailIsValid && passwordIsValid) {
      formIsValid = true;
    }
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const enteredFirstName = firstNameValue;
    const enteredEmail = emailValue;
    const enteredPassword = passwordValue;

    // let url;
    // if (props.type === "signin") {
    //   url = process.env.REACT_APP_SIGN_IN;
    // } else {
    //   url = process.env.REACT_APP_SIGN_UP;
    // }

    if (props.type === "signup") {
      try {
        await firebaseCtx.signUpUser(
          enteredFirstName,
          enteredEmail,
          enteredPassword
        );
        resetHandler();
        navigate("/signin");
      } catch (err) {}
    } else {
      try {
        await firebaseCtx.signInUser(enteredEmail, enteredPassword);
        resetHandler();
        navigate("/browse");
      } catch (err) {}
    }
  };

  const resetHandler = () => {
    resetFirstName();
    resetEmail();
    resetPassword();
  };

  return (
    <form className={styles["sign-form"]} onSubmit={submitHandler}>
      <span className={styles.title}>
        {props.type === "signin" ? "Sign In" : "Sign Up"}
      </span>
      {props.type === "signup" && (
        <>
          <div
            className={`${styles["input-container"]} ${
              firstNameIsDisplay ? styles.focus : styles.blur
            }  ${firstNameHasError && styles.invalid}`}
            onClick={firstNameFocusHandler}
          >
            <label htmlFor="firstName" className={styles.placeholder}>
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstNameValue}
              ref={firstNameRef}
              onBlur={firstNameBlurHandler}
              onChange={firstNameChangeHandler}
            ></input>
          </div>
          {firstNameHasError && (
            <span className={styles.error}>Please enter your first name.</span>
          )}
        </>
      )}
      <div
        className={`${styles["input-container"]} ${
          emailIsDisplay ? styles.focus : styles.blur
        }  ${emailHasError && styles.invalid}`}
        onClick={emailFocusHandler}
      >
        <label htmlFor="email" className={styles.placeholder}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={emailValue}
          ref={emailRef}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        ></input>
      </div>
      {emailHasError && (
        <span className={styles.error}>
          Please enter a valid email address.
        </span>
      )}
      <div
        className={`${styles["input-container"]} ${
          passwordIsDisplay ? styles.focus : styles.blur
        } ${passwordHasError && styles.invalid}`}
        onClick={passwordFocusHandler}
      >
        <label htmlFor="password" className={styles.placeholder}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={passwordValue}
          ref={passwordRef}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
        ></input>
      </div>
      {passwordHasError && (
        <span className={styles.error}>
          Your password must contain atleast 6 characters.
        </span>
      )}
      {firebaseCtx.loading && (
        <span className={styles.loading}>Loading...</span>
      )}
      {!firebaseCtx.loading && (
        <button type="submit" className={styles["submit-btn"]}>
          {props.type === "signin" ? "Sign In" : "Sign Up"}
        </button>
      )}
      <div className={styles["switch-option"]}>
        {props.type === "signin" ? (
          <>
            <span>New to Netflix? </span>
            <Link to="/signup" onClick={resetHandler}>
              Sign up now.
            </Link>
          </>
        ) : (
          <>
            <span>Already a user? </span>
            <Link to="/signin" onClick={resetHandler}>
              Sign in now.
            </Link>
          </>
        )}
      </div>
    </form>
  );
};

export default SignForm;
