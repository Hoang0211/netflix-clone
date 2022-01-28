import React from "react";

import Header from "../../components/header/Header";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div style={{ minHeight: "100vh" }}></div>
    </div>
  );
};

export default Home;
