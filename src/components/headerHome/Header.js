import React from "react";

import RegForm from "../regForm/RegForm";

import bg from "../../assets/images/misc/home-bg.jpg";
import logo from "../../logo.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.bg} src={bg} alt="bg-img" />
      <div className={styles.opacity}></div>
      <div className={styles.frame}>
        <img src={logo} alt="netflix-logo" />
        <div className={styles.actions}>
          <select>
            <option>English</option>
            <option>Suomi</option>
            <option>Svenska</option>
          </select>
          <button>Sign In</button>
        </div>
      </div>
      <div className={styles.feature}>
        <span className={styles.title}>
          Unlimited films, TV <br /> programmes and more.
        </span>
        <span className={styles.subtitle}>
          Watch anywhere. Cancel at any time.
        </span>
        <RegForm />
      </div>
    </div>
  );
};

export default Header;