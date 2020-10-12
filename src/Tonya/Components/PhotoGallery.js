import React, {Component} from 'react';
import geek from '../../Assets/geekMe.jpg'
import teaPots from '../../Assets/teaPots.jpg'
import Paylocity from '../../Assets/Paylocity.jpg'
import tea from '../../Assets/High Tea with Steven.jpg'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
  tea,
  geek,
  Paylocity,
  teaPots
];

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
          Photo Gallery:
        </div>
        <Zoom className={'slides'} arrows={'false'}>
          {slideImages.map((img, i) => <img key={i} src={img} width={'80%'} arrows={'false'}/>)}
        </Zoom>
      </div>
    );
  }
}

export default PhotoGallery;
