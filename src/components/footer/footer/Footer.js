import React from 'react';

import styles from './Footer.module.scss';

const Footer = ({ page }) => {
  return (
    <div className={`${styles.footer} ${page === 'home' && styles.home}`}>
      <span className={styles.top}>Questions? Call 0800 302 533</span>
      <ul className={styles['links-container']}>
        <li className={styles.link}>FAQ</li>
        <li className={styles.link}>Help Centre</li>
        <li className={styles.link}>Account</li>
        <li className={styles.link}>Media Centre</li>
        <li className={styles.link}>Investor Relations</li>
        <li className={styles.link}>Jobs</li>
        <li className={styles.link}>Redeem gift cards</li>
        <li className={styles.link}>Buy gift cards</li>
        <li className={styles.link}>Ways to Watch</li>
        <li className={styles.link}>Terms of Uses</li>
        <li className={styles.link}>Privacy</li>
        <li className={styles.link}>Cookie Preferences</li>
        <li className={styles.link}>Corporate Information</li>
        <li className={styles.link}>Contact Us</li>
        <li className={styles.link}>Speed Test</li>
        <li className={styles.link}>Legal Notices</li>
        <li className={styles.link}>Only on Netflix</li>
      </ul>
      <select className={styles.language} aria-label='language'>
        <option>English</option>
        <option>Finnish</option>
        <option>Svenska</option>
      </select>
      <span className={styles.country}>Netflix Finland</span>
    </div>
  );
};

export default Footer;
