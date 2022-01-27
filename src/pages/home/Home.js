import React from "react";

import Header from "../../components/header/Header";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div
        className="test"
        style={{ background: "black", "min-height": "200vh" }}
      ></div>
    </div>
  );
};

export default Home;
