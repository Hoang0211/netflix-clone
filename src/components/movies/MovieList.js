import React from 'react';

import MovieItem from './MovieItem';
import MovieInfoContainer from './MovieInfoContainer';
import styles from './MovieList.module.scss';

const MovieList = ({
  id,
  type,
  genre,
  moviesArr,
  showingListId,
  featuredInfo,
  showFeaturedHandler,
  hideFeaturedHandler,
}) => {
  return (
    <div className={styles['movies-list']}>
      <span className={styles['list-title']}>
        {genre.charAt(0).toUpperCase() + genre.slice(1)}
      </span>
      <div className={styles['movies-container']}>
        {moviesArr.map((movie) => (
          <MovieItem
            key={movie.id}
            type={type}
            genre={genre}
            movie={movie}
            listId={id}
            showFeaturedHandler={showFeaturedHandler}
          />
        ))}
      </div>
      {id === showingListId && (
        <MovieInfoContainer
          featuredInfo={featuredInfo}
          hideFeaturedHandler={hideFeaturedHandler}
        />
      )}
    </div>
  );
};

export default MovieList;
