import React from 'react';

const NavBar = () =>{
  return(
    <div className={'navBar'}>
      <nav>
        <ul>
          <li><a className={'nav'} href="#about">About Me</a></li>
          <li><a className={'nav'} href="#portf">Portfolio</a></li>
          <li><a className={'nav'} href="#blog">Blog</a></li>
          <li><a className={'nav'} href="#photo">Photo Gallery</a></li>
        </ul>
      </nav>
    </div>
  )
};

export default NavBar;
