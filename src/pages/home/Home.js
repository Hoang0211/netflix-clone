import React from "react";

import HeaderHome from "../../components/header/headerHome/HeaderHome";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Faqs from "../../components/faqs/Faqs";
import Footer from "../../components/footer/footer/Footer";

import tv from "../../assets/images/misc/home-tv.jpg";
import mobile from "../../assets/images/misc/home-mobile.jpg";
import imac from "../../assets/images/misc/home-imac.jpg";

import styles from "./Home.module.scss";

const jumbotrons = [
  {
    id: 1,
    title: "Enjoy on your TV.",
    subTitle:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    image: tv,
    alt: "Tiger King on Netflix",
    reverse: false,
  },
  {
    id: 2,
    title: "Download your programmes to watch on the go.",
    subTitle: "Save your data and watch all your favourites offline.",
    image: mobile,
    alt: "Watch on mobile",
    reverse: true,
  },
  {
    id: 3,
    title: "Watch everywhere.",
    subTitle:
      "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.",
    image: imac,
    alt: "Money Heist on Netflix",
    reverse: false,
  },
];

const Home = () => {
  window.scrollTo({ top: 0 });
  return (
    <div className={styles.home}>
      <HeaderHome />
      {jumbotrons.map((jumbotron) => (
        <Jumbotron
          key={jumbotron.id}
          title={jumbotron.title}
          subtitle={jumbotron.subTitle}
          image={jumbotron.image}
          alt={jumbotron.alt}
          reverse={jumbotron.reverse}
        />
      ))}
      <Faqs />
      <Footer page={"home"} />
    </div>
  );
};

export default Home;
