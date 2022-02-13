import React from 'react';
import girlCoder from '../../Assets/girlCoder.png';


const GirlCoder = () => {
    return (
      <div className={'girlCoder'}>
        <img src={girlCoder} className={'girl'} alt='beingMe' width='100' height='120' />
        <div className={'coder'}> {"< Girl Coder />"} </div>
      </div>
    );
};

export default GirlCoder;
