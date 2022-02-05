import React from "react";

import styles from "./FooterSign.module.scss";

const FooterSign = () => {
  return (
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
  );
};

export default FooterSign;
