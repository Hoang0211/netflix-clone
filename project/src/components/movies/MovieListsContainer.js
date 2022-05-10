import React, { useState, useEffect } from 'react';

import MovieList from './MovieList';
import { filmList, seriesList } from '../../data/movie-list-data';

const MovieListsContainer = ({ type }) => {
  const [showingListId, setShowingListId] = useState(null);
  const [featuredInfo, setFeaturedInfo] = useState({});

  useEffect(() => {
    hideFeaturedHandler();
  }, [type]);

  const showFeaturedHandler = (listId, movieInfo) => {
    setShowingListId(listId);
    setFeaturedInfo(movieInfo);
  };

  const hideFeaturedHandler = () => {
    setShowingListId(null);
    setFeaturedInfo({});
  };

  return type === 'films' ? (
    <>
      {filmList.map((list) => (
        <MovieList
          key={list.id}
          id={list.id}
          type={list.type}
          genre={list.genre}
          moviesArr={list.moviesArr}
          showingListId={showingListId}
          featuredInfo={featuredInfo}
          showFeaturedHandler={showFeaturedHandler}
          hideFeaturedHandler={hideFeaturedHandler}
        />
      ))}
    </>
  ) : (
    <>
      {seriesList.map((list) => (
        <MovieList
          key={list.id}
          id={list.id}
          type={list.type}
          genre={list.genre}
          moviesArr={list.moviesArr}
          showingListId={showingListId}
          featuredInfo={featuredInfo}
          showFeaturedHandler={showFeaturedHandler}
          hideFeaturedHandler={hideFeaturedHandler}
        />
      ))}
    </>
  );
};

export default MovieListsContainer;
