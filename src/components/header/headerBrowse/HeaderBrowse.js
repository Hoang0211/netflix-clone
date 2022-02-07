import React, { useState, useEffect } from "react";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../../../logo.svg";

import styles from "./HeaderBrowse.module.scss";

const HeaderBrowse = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setIsScrolled(window.pageYOffset === 0 ? false : true);

    // clean up code
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showOptionHandler = () => {
    setShowOptions((prevValue) => !prevValue);
  };

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.left}>
        <img className={styles.logo} src={logo} alt="netflix-logo" />
        <span>Series</span>
        <span>Movies</span>
      </div>
      <div className={styles.right}>
        <IoSearchOutline className={styles.icon} />
        <IoNotificationsOutline className={styles.icon} />
        <img
          className={styles["profile-img"]}
          src="https://66.media.tumblr.com/eea08445dff6b1c80b96338370bb604e/ea827aef008c99a6-14/s400x600/b3828db1b4b36ce074145b96490b0cbb9e8c297d.jpg"
          alt=""
        />
        <div className={styles.more} onClick={showOptionHandler}>
          <IoMdArrowDropdown className={styles} />
          <div
            className={`${styles.options} ${showOptions ? styles.show : ""}`}
          >
            <span>Settings</span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBrowse;
