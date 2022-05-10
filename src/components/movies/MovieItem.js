import React, { useState } from 'react';

import styles from './MovieItem.module.scss';

const MovieItem = ({ type, genre, movie, listId, showFeaturedHandler }) => {
  const [hover, setHover] = useState(false);

  const showFeatured = () => {
    showFeaturedHandler(listId, {
      type: type,
      genre: genre,
      title: movie.title,
      desc: movie.desc,
      rating: movie.rating,
      fileName: movie.fileName,
    });
  };

  return (
    <div
      className={`${styles['movie-item']} ${hover && styles.hover} ${
        movie.id === 5 && styles.last
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={showFeatured}
    >
      <img
        src={require(`../../assets/images/${type}/${genre}/${movie.fileName}/small.jpg`)}
        alt={movie.fileName}
      />
      {hover && (
        <div className={styles.info}>
          <span className={styles.title}>{movie.title}</span>
          <span className={styles.desc}>{movie.desc}</span>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
