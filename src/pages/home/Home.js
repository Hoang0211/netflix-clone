import React from 'react';

import HeaderHome from '../../components/header/headerHome/HeaderHome';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Faqs from '../../components/faqs/Faqs';
import Footer from '../../components/footer/footer/Footer';
import { jumbotrons } from '../../data/jumbotrons-data';
import styles from './Home.module.scss';

const Home = () => {
  window.scrollTo({ top: 0 });
  return (
    <div className={styles.home}>
      <HeaderHome />
      <main>
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
      </main>
      <Footer page={'home'} />
    </div>
  );
};

export default Home;
