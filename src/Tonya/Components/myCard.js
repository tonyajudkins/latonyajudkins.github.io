import React from 'react';
import linkedin from '../../Assets/linkedin.png';
import facebook from '../../Assets/facebook.png';
import github from '../../Assets/github.png';

const MyCard = () =>{
 
    return (
      <div className={'myCard'}>
        <i className="fab fa-linkedin"> </i>
        <ul className={'card'}>
          <li className={'social'}>LinkedIn <a href={'https://www.linkedin.com/'} target="_blank">&#xf08c;</a></li>
          <li className={'social'}>FaceBook <a href={'https://www.facebook.com/'} target="_blank"><img className={'socialIcon'} width={'40%'} src={facebook} alt={'facebook'}/> </a></li>
          <li className={'social'}>GitHub <a href={'https://www.github.com/'} target="_blank"><img className={'socialIcon'}  width={'40%'} src={github} alt={'git'}/> </a></li>
          <li> </li>
          <li>Resume</li>
        </ul>
      </div>
    );
};

export default MyCard;