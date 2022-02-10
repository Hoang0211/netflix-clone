import React from "react";

import MovieItem from "./MovieItem";
import MovieInfoContainer from "./MovieInfoContainer";

import styles from "./MovieList.module.scss";

const MovieList = (props) => {
  return (
    <div className={styles["movies-list"]}>
      <span className={styles["list-title"]}>
        {props.genre.charAt(0).toUpperCase() + props.genre.slice(1)}
      </span>
      <div className={styles["movies-container"]}>
        <MovieItem
          type={props.type}
          genre={props.genre}
          movie={props.moviesArr[0]}
          listId={props.id}
          showFeaturedHandler={props.showFeaturedHandler}
        />
        <MovieItem
          type={props.type}
          genre={props.genre}
          movie={props.moviesArr[1]}
          listId={props.id}
          showFeaturedHandler={props.showFeaturedHandler}
        />
        <MovieItem
          type={props.type}
          genre={props.genre}
          movie={props.moviesArr[2]}
          listId={props.id}
          showFeaturedHandler={props.showFeaturedHandler}
        />
        <MovieItem
          type={props.type}
          genre={props.genre}
          movie={props.moviesArr[3]}
          listId={props.id}
          showFeaturedHandler={props.showFeaturedHandler}
        />
        <MovieItem
          type={props.type}
          genre={props.genre}
          movie={props.moviesArr[4]}
          listId={props.id}
          showFeaturedHandler={props.showFeaturedHandler}
        />
      </div>
      {props.id === props.showingListId && (
        <MovieInfoContainer
          featuredInfo={props.featuredInfo}
          hideFeaturedHandler={props.hideFeaturedHandler}
        />
      )}
    </div>
  );
};

export default MovieList;
