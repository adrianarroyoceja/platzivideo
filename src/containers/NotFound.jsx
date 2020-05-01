import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <section className='error'>
      <div className='text animated pulse'>404</div>
      <p className='error__text'>Página no encontrada</p>
    </section>
  </>
);

export default NotFound;
