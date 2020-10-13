import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import geek from '../../Assets/geekMe.jpg';
import teaPots from '../../Assets/teaPots.jpg';
import budB from '../../Assets/budB.jpg';
 import prom from '../../Assets/prom.jpg';
import helen from '../../Assets/helen.jpg';
 import yass from '../../Assets/1999.jpg';
import alumni from '../../Assets/alumni.jpg';
 import ADuncan from '../../Assets/ADuncan.jpeg';
import Paylocity from '../../Assets/Paylocity.jpg';
import tea from '../../Assets/High Tea with Steven.jpg';


const slideImages = [tea, geek, prom, helen, yass, alumni, ADuncan, budB, Paylocity, teaPots];

class PhotoGallery extends Component {
  render() {
    return (
      <div className={'photo'} id='photo'>
        <div className={'photoGallery'}>
          Moments to Remember:
        </div>
      <br/>
        <a
          href={'https://drive.google.com/file/d/1vDLuigx7PI8pbi-8LkqxX6P11cGTBUuZ/view?usp=sharing'}
          className={'blogTitle first'}
          target="_blank" rel="noopener noreferrer" > My First Technical Presentation
        </a>
        <br />
        <br />
        <div className={'gallery'}>
          Photo Gallery:
        </div>
        <div className={'slideImage'}>
        <AliceCarousel autoPlay autoPlayInterval="3000" infinite={true} disableButtonsControls={true} disableDotsControls={true}>
          {slideImages.map((img, i) => <img key={i} src={img} alt={'hello'} arrows={'false'} className={'imgSlides'} />)}
        </AliceCarousel>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
