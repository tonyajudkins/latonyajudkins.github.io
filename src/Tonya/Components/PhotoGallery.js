import React, {Component} from 'react';
import video from "../../Assets/blackHistory1.mp4";
import video2 from "../../Assets/blackHistory2.mp4";

class PhotoGallery extends Component {
  
  render() {
    
    return (
      <div className={'photo'}>
        <div className={'photoGallery'}>
          Moments to Remember
        </div>
      
        <a
          href={'https://www.youtube.com/watch?v=FzkGGJmqi88'}
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