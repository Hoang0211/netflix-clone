import React from "react";

import styles from "./Jumbotron.module.scss";

const Jumbotron = (props) => {
  return (
    <div className={styles.jumbotron}>
      <div className={`${styles.container} ${props.reverse && styles.reverse}`}>
        <div className={styles.left}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.subtitle}>{props.subtitle}</span>
        </div>
        <div className={styles.right}>
          <img src={props.image} alt={props.alt} />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
