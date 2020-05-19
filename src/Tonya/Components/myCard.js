import React from 'react';
import linkedin from '../../Assets/linkedIn.svg';
import facebook from '../../Assets/facebook.svg';
import github from '../../Assets/github.svg';
import resume from '../../Assets/resume.svg';

const MyCard = () =>{
 
    return (
      <div className={'myCard'}>
        <ul className={'card'}>
          <li className={'social'}> <a href={'https://www.linkedin.com/'} target="_blank"><img className={'socialIcon'} width={'20%'} src={linkedin} alt={'linkedin'}/>LinkedIn </a></li>
          <li className={'social'}> <a href={'https://www.facebook.com/'} target="_blank"><img className={'socialIcon'} width={'20%'} src={facebook} alt={'facebook'}/>FaceBook </a></li>
          <li className={'social'}> <a href={'https://www.github.com/'} target="_blank"><img className={'socialIcon'}  width={'20%'} src={github} alt={'git'} />GitHub </a></li>
          
        </ul>
        <div className={'resume'}> <a href={"https://sites.google.com/view/tonyaresume/home"} target="_blank"><img className={'socialIcon'}  width={'15%'} src={resume} alt={'resume'}/> Resume</a> </div>
      </div>
    );
};

export default MyCard;