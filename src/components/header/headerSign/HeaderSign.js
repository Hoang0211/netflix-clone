import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../logo.svg";

import styles from "./HeaderSign.module.scss";

const HeaderSign = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="netflix-logo" />
      </Link>
    </div>
  );
};

export default HeaderSign;
