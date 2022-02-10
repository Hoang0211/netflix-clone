import React, { useState, useContext } from "react";

import FirebaseContext from "../../store/firebase-context";

import ProfileList from "../../components/profile/ProfileList";
import HeaderBrowse from "../../components/header/headerBrowse/HeaderBrowse";
import Featured from "../../components/featured/Featured";
import MovieListsContainer from "../../components/movies/MovieListsContainer";
import Footer from "../../components/footer/footer/Footer";

import styles from "./Browse.module.scss";

const Browse = () => {
  const firebaseCtx = useContext(FirebaseContext);

  const [selectedProfile, setSelectedProfile] = useState(false);
  const [selectedType, setSelectedType] = useState("series");

  return (
    <div className={styles.browse}>
      {selectedProfile ? (
        <>
          <HeaderBrowse setSelectedType={setSelectedType} />
          <Featured />
          <MovieListsContainer type={selectedType} />
          <Footer page={"browse"} />
        </>
      ) : (
        <ProfileList
          user={firebaseCtx.user}
          setSelectedProfile={setSelectedProfile}
        />
      )}
    </div>
  );
};

export default Browse;
