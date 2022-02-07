import React from "react";

import HeaderBrowse from "../../components/header/headerBrowse/HeaderBrowse";
import Featured from "../../components/featured/Featured";

import styles from "./Browse.module.scss";

const Browse = () => {
  return (
    <div className={styles.browse}>
      <HeaderBrowse />
      <Featured />
    </div>
  );
};

export default Browse;
