import React from "react";
import { Link } from 'react-router-dom';
import tBot from '../../Assets/TBot.png';

const Portfolio = () => {
  return (
    <div className={'myPortfolio'}>
      <div className={'portfolio'}>
        My Portfolio
      </div>
      <div>
        <div className={'react'}> React Apps:</div>
        <ul className={'portfList'}>
          <li> <a href={'https://drive.google.com/file/d/1TIVS6AAelKgJaVcspq3ibzGyGJWgRmAi/view?usp=sharing'} target="_blank" rel="noopener noreferrer" > PCTY Social (My first React app) </a></li>
          <div className={'descr'}> -Internal social app for employees</div>
          <li> <a href={'https://drive.google.com/file/d/1tJ6iwB2PVIpOZO_n_cfT3RrvRyDg97k0/view?usp=sharing'} target="_blank" rel="noopener noreferrer" > VQ Demo</a></li>
          <div className={'descr'}> -Interactive demo to showcase sports analysis API </div>
          <li> <a href={'https://dyamonds-sweet16.herokuapp.com/'} target="_blank" rel="noopener noreferrer" > Dyamond's Sweet 16</a></li>
          <div className={'descr'}> -Invitation and RSVP to a party</div>
          <li> <a href={'https://tonyajudkins.com'} target="_blank" rel="noopener noreferrer" >Tonya Judkins </a></li>
          <div className={'descr'}> -My website (yes.. this one)</div>
        </ul>
        <div className={'aws'}> AWS Innovates:</div>
        <ul className={'portfList'}>
          <li> <Link to={'/tbot'} target="_blank" rel="noopener noreferrer" > <img className={'tBot'} src={tBot} width={'15vw'} alt={'hello T'}/>
            &nbsp;&nbsp; T-Bot (my personal bot)</Link></li>
        </ul>
      </div>
    </div>
  )
};

export default Portfolio
