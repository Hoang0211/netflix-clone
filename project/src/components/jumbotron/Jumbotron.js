import React from 'react';

import styles from './Jumbotron.module.scss';

const Jumbotron = ({ reverse, title, subtitle, image, alt }) => {
  return (
    <div className={styles.jumbotron}>
      <div className={`${styles.container} ${reverse && styles.reverse}`}>
        <div className={styles.left}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
        <div className={styles.right}>
          <img
            src={require(`../../assets/images/misc/home-${image}.jpg`)}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
