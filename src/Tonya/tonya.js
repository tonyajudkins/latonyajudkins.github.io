import React, {Component} from 'react';
import me from '../Assets/tj.jpg';
import BlogRoom from "./Components/BlogRoom";
import PhotoGallery from "./Components/PhotoGallery";
import TechLife from "./Components/TechLife";
import MyCard from "./Components/myCard";

class Tonya extends Component {
    render() {
        return (
            <div className={'container'}>
              
              <div className={'top'}>
                <div className={'header'}>
                
                <div className={'myName'}>Tonya Judkins</div>
                <div className={'subTitle'}>-based on a true story</div>
                <img className={'me'} src={me}  alt='beingMe' />
                
              </div>
              
                <MyCard/>
              </div>
              
              <div className={'main2'} >
                <BlogRoom />
                <PhotoGallery />
            </div>
                
                <TechLife/>
                
            </div>
        );
    }
}

export default Tonya;