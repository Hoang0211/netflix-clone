import React from 'react';

import HeaderSign from '../../components/header/headerSign/HeaderSign';
import SignForm from '../../components/form/signForm/SignForm';
import FooterSign from '../../components/footer/footerSign/FooterSign';
import bg from '../../assets/images/misc/home-bg.jpg';
import styles from './Login.module.scss';

const Login = ({ type }) => {
  return (
    <div className={styles.login}>
      <img className={styles.bg} src={bg} alt='bg-img' />
      <HeaderSign />
      <SignForm type={type} />
      <FooterSign />
    </div>
  );
};

export default Login;
