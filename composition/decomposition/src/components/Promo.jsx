/**
 * Компонент Промо-Баннер 
 */

import React from 'react';

function Promo(props) {
  const { img } = props;
  return (
    <img
      className='banner'
      src={img}
      alt=''
      style={{ width: 'auto', height: '300px' }}
    />
  );
}
export default Promo;