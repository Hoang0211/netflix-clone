import React from "react";

import logo from "../../../logo.svg";

import styles from "./HeaderSign.module.scss";

const HeaderSign = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="netflix-logo" />
    </div>
  );
};

export default HeaderSign;
