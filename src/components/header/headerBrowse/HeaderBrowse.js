import React, { useState, useEffect, useContext } from "react";

import FirebaseContext from "../../../store/firebase-context";
import { useNavigate } from "react-router-dom";

import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../../../logo.svg";

import styles from "./HeaderBrowse.module.scss";

const HeaderBrowse = (props) => {
  const firebaseCtx = useContext(FirebaseContext);
  const navigate = useNavigate();

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

  const logOutHandler = async () => {
    try {
      await firebaseCtx.logOutUser();
      navigate("/");
    } catch (err) {}
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
          src={require(`../../../assets/images/users/${firebaseCtx.user.photoURL}.png`)}
          alt="profile-img"
        />
        <div className={styles.more} onClick={showOptionHandler}>
          <IoMdArrowDropdown className={styles} />
          <div
            className={`${styles.options} ${showOptions ? styles.show : ""}`}
          >
            <span>Settings</span>
            <span onClick={logOutHandler}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBrowse;
