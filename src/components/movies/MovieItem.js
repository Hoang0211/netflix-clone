import React, { useState } from "react";

import styles from "./MovieItem.module.scss";

const MovieItem = (props) => {
  const [hover, setHover] = useState(false);

  const showFeaturedHandler = () => {
    props.showFeaturedHandler(props.listId, {
      type: props.type,
      genre: props.genre,
      title: props.movie.title,
      desc: props.movie.desc,
      rating: props.movie.rating,
      fileName: props.movie.fileName,
    });
  };

  return (
    <div
      className={`${styles["movie-item"]} ${hover && styles.hover} ${
        props.movie.id === 5 && styles.last
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={showFeaturedHandler}
    >
      <img
        src={require(`../../assets/images/${props.type}/${props.genre}/${props.movie.fileName}/small.jpg`)}
        alt={props.movie.fileName}
      />
      {hover && (
        <div className={styles.info}>
          <span className={styles.title}>{props.movie.title}</span>
          <span className={styles.desc}>{props.movie.desc}</span>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
