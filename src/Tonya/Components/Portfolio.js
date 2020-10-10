import React from "react";
import tBot from '../../Assets/TBot.png';

const Portfolio = () => {
  return (
    <div className={'myPortfolio'}>
      <div className={'portfolio'}>
        My Portfolio
      </div>
      <div className={'?'}>
        <div className={'react'}> React Apps:</div>
        <ul className={'portfList'}>
          <li> <a href={''} target="_blank"> PCTY Social (My first React app) </a></li>
          <div className={'descr'}> -Internal social app for employees</div>
          <li> <a href={''} target="_blank"> VQ Demo</a></li>
          <div className={'descr'}> -Interactive demo to showcase sports analysis API </div>
          <li> <a href={''} target="_blank"> Dyamond's Sweet 16</a></li>
          <div className={'descr'}> -Invitation and RSVP to a party</div>
        </ul>
        <div className={'aws'}> AWS Innovates:</div>
        <ul className={'portfList'}>
          <li> <a href={''} target="_blank"> <img className={'tBot'} src={tBot} width={'5%'}/>
            &nbsp;&nbsp; T-Bot (my personal bot)</a></li>
          <li> <a href={''} target="_blank"> </a></li>
          <li> <a href={''} target="_blank"> </a></li>
        </ul>
      </div>
    </div>
  )
};

export default Portfolio
