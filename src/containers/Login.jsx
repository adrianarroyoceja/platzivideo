import React from 'react';
import { Link } from 'react-router-dom';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button type='button' className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Recuérdame
          </label>
          <Link to='/'>
            Olvidé mi contraseña
          </Link>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='' />
          <Link className='link' to='/'>
            Inicia sesión con Google
          </Link>
        </div>
        <div>
          <img src={twitterIcon} alt='' />
          <Link className='link' to='/'>
            Inicia sesión con Twitter
          </Link>
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <Link to='/Register'>
          Regístrate
        </Link>
      </p>
    </section>
  </section>
);

export default Login;
