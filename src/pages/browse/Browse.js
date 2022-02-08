import React, { useState, useContext } from "react";

import FirebaseContext from "../../store/firebase-context";

import ProfileList from "../../components/profile/ProfileList";
import HeaderBrowse from "../../components/header/headerBrowse/HeaderBrowse";
import Featured from "../../components/featured/Featured";

import styles from "./Browse.module.scss";

const Browse = () => {
  const firebaseCtx = useContext(FirebaseContext);

  const [selectedProfile, setSelectedProfile] = useState(false);

  return (
    <div className={styles.browse}>
      {selectedProfile ? (
        <>
          <HeaderBrowse />
          <Featured />
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
