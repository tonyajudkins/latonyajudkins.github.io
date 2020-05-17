import React, {Component} from 'react';
import me from '../Assets/beingMe.jpg';
import BlogRoom from "./Components/BlogRoom";
import PhotoGallery from "./Components/PhotoGallery";

class Tonya extends Component {
    render() {
        return (
            <div className={'container'}>
              <div className={'header'}>
                
                <div className={'myName'}>Tonya Judkins</div>
                <div className={'subTitle'}>-based on a true story</div>
                <img className={'me'} src={me}  alt='beingMe' width='300' height='320' />
                
              </div>
                <BlogRoom />
                <PhotoGallery />
            </div>
        );
    }
}

export default Tonya;