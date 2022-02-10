import React from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from "./MovieInfoContainer.module.scss";

const MovieInfoContainer = (props) => {
  let ratingColor;
  if (props.featuredInfo.rating <= 13) {
    ratingColor = "green";
  } else if (props.featuredInfo.rating <= 16) {
    ratingColor = "orange";
  } else {
    ratingColor = "red";
  }

  return (
    <div className={styles["movie-info-container"]}>
      <img
        src={require(`../../assets/images/${props.featuredInfo.type}/${props.featuredInfo.genre}/${props.featuredInfo.fileName}/large.jpg`)}
        alt={`${props.featuredInfo.title}`}
      />
      <div className={styles.info}>
        <span className={styles.title}>{props.featuredInfo.title}</span>
        <span className={styles.desc}>{props.featuredInfo.desc}</span>
        <span className={`${styles.rating} ${styles[ratingColor]}`}>
          {props.featuredInfo.rating}
        </span>
        <span className={styles.genre}>
          {props.featuredInfo.genre.charAt(0).toUpperCase() +
            props.featuredInfo.genre.slice(1)}
        </span>
      </div>

      <AiOutlineCloseCircle
        className={styles.close}
        onClick={props.hideFeaturedHandler}
      />
    </div>
  );
};

export default MovieInfoContainer;
