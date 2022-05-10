import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import styles from './MovieInfoContainer.module.scss';

const MovieInfoContainer = ({ featuredInfo, hideFeaturedHandler }) => {
  let ratingColor;
  if (featuredInfo.rating <= 13) {
    ratingColor = 'green';
  } else if (featuredInfo.rating <= 16) {
    ratingColor = 'orange';
  } else {
    ratingColor = 'red';
  }

  return (
    <div className={styles['movie-info-container']}>
      <img
        src={require(`../../assets/images/${featuredInfo.type}/${featuredInfo.genre}/${featuredInfo.fileName}/large.jpg`)}
        alt={`${featuredInfo.title}`}
      />
      <div className={styles.info}>
        <span className={styles.title}>{featuredInfo.title}</span>
        <span className={styles.desc}>{featuredInfo.desc}</span>
        <span className={`${styles.rating} ${styles[ratingColor]}`}>
          {featuredInfo.rating}
        </span>
        <span className={styles.genre}>
          {featuredInfo.genre.charAt(0).toUpperCase() +
            featuredInfo.genre.slice(1)}
        </span>
      </div>

      <AiOutlineCloseCircle
        className={styles.close}
        onClick={hideFeaturedHandler}
      />
    </div>
  );
};

export default MovieInfoContainer;
