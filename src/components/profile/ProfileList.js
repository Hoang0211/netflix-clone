import React from "react";

import logo from "../../logo.svg";
import styles from "./ProfileList.module.scss";

const ProfileList = (props) => {
  return (
    <div className={styles["profile-list"]}>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="netflix-logo" />
      </div>
      <span className={styles.title}>Who's watching?</span>
      <div className={styles["profile-container"]}>
        <div
          className={styles.profile}
          onClick={() => props.setSelectedProfile(true)}
        >
          <img
            src={require(`../../assets/images/users/${props.user.photoURL}.png`)}
            alt="user-img"
          />
          <span className={styles.name}>{props.user.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
