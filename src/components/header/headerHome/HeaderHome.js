import React from 'react';
import { Link } from 'react-router-dom';

import RegForm from '../../form/regForm/RegForm';
import bg from '../../../assets/images/misc/home-bg.jpg';
import logo from '../../../logo.svg';
import styles from './HeaderHome.module.scss';

const HeaderHome = () => {
  return (
    <header className={styles.header}>
      <img className={styles.bg} src={bg} alt='bg-img' />
      <div className={styles.frame}>
        <img src={logo} alt='netflix-logo' />
        <div className={styles.actions}>
          <select aria-label='language'>
            <option>English</option>
            <option>Suomi</option>
            <option>Svenska</option>
          </select>
          <button>
            <Link to='/signin' className={styles.link}>
              Sign In
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.feature}>
        <span className={styles.title}>
          Unlimited films, TV <br /> programmes and more.
        </span>
        <span className={styles.subtitle}>
          Watch anywhere. Cancel at any time.
        </span>
        <RegForm />
      </div>
    </header>
  );
};

export default HeaderHome;
