import React, {Component} from 'react';
import video from "../../Assets/blackHistory1.mp4";
import video2 from "../../Assets/blackHistory2.mp4";

class PhotoGallery extends Component {
  
  render() {
    
    return (
      <div className={'photo'}>
        <div className={'photoGallery'}>
          Photo Gallery
        </div>
        <div className={'gallery'}>
          Coming Soon <span>&#129335;&#127997;</span><span>&#129335;&#127997;</span><span>&#129335;&#127997;</span>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;