import React, { useState, useEffect } from "react";

import MovieList from "./MovieList";

import {
  childrenSeries,
  comediesSeries,
  crimeSeries,
  documentariesSeries,
  feelgoodSeries,
  childrenFilms,
  dramaFilms,
  romanceFilms,
  suspenseFilms,
  thrillerFilms,
} from "../../data/movies-data";

const MovieListsContainer = (props) => {
  const [showingListId, setShowingListId] = useState(null);
  const [featuredInfo, setFeaturedInfo] = useState({});

  useEffect(() => {
    hideFeaturedHandler();
  }, [props.type]);

  const showFeaturedHandler = (listId, movieInfo) => {
    setShowingListId(listId);
    setFeaturedInfo(movieInfo);
  };

  const hideFeaturedHandler = () => {
    setShowingListId(null);
    setFeaturedInfo({});
  };

  return props.type === "films" ? (
    <>
      <MovieList
        id={1}
        type={props.type}
        genre="children"
        moviesArr={childrenFilms}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
      <MovieList
        id={2}
        type={props.type}
        genre="drama"
        moviesArr={dramaFilms}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
      <MovieList
        id={3}
        type={props.type}
        genre="romance"
        moviesArr={romanceFilms}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
      <MovieList
        id={4}
        type={props.type}
        genre="suspense"
        moviesArr={suspenseFilms}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
      <MovieList
        id={5}
        type={props.type}
        genre="thriller"
        moviesArr={thrillerFilms}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
    </>
  ) : (
    <>
      <MovieList
        id={1}
        type={props.type}
        genre="children"
        moviesArr={childrenSeries}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
      <MovieList
        id={2}
        type={props.type}
        genre="comedies"
        moviesArr={comediesSeries}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
      <MovieList
        id={3}
        type={props.type}
        genre="crime"
        moviesArr={crimeSeries}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
      <MovieList
        id={4}
        type={props.type}
        genre="documentaries"
        moviesArr={documentariesSeries}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
      <MovieList
        id={5}
        type={props.type}
        genre="feel-good"
        moviesArr={feelgoodSeries}
        showingListId={showingListId}
        featuredInfo={featuredInfo}
        showFeaturedHandler={showFeaturedHandler}
        hideFeaturedHandler={hideFeaturedHandler}
      />
    </>
  );
};

export default MovieListsContainer;
