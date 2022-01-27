import React from "react";

import bg from "../../assets/images/misc/home-bg.jpg";
import logo from "../../logo.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.bg} src={bg} alt="bg-img" />
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
        <form>
          <span className={styles.text}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className={styles.inputs}>
            <input placeholder="Email address"></input>
            <button>Get Started</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
