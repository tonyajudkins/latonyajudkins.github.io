import React, {Component} from 'react';
class PhotoGallery extends Component {
  
  render() {
    
    return (
      <div className={'photo'}>
        <div className={'photoGallery'}>
          Moments to Remember
        </div>
      
        <a
          href={'https://drive.google.com/file/d/1vDLuigx7PI8pbi-8LkqxX6P11cGTBUuZ/view?usp=sharing'}
          className={'blogTitle first'}
          target="_blank"> My First Technical Presentation
        </a>
        <br />
        <br />
        <br />
        <div className={'gallery'}>
          Photos Coming Soon <span>&#129335;&#127997;</span><span>&#129335;&#127997;</span><span>&#129335;&#127997;</span>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
