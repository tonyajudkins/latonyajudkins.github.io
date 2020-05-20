import React, {Component} from 'react';
import me from '../Assets/beingMe.jpg';
import BlogRoom from "./Components/BlogRoom";
import PhotoGallery from "./Components/PhotoGallery";
import GirlCoder from "./Components/GirlCoder";
import TechLife from "./Components/TechLife";
import MyCard from "./Components/myCard";

class Tonya extends Component {
    render() {
        return (
            <div className={'container'}>
              <div className={'header'}>
                
                <div className={'myName'}>Tonya Judkins</div>
                <div className={'subTitle'}>-based on a true story</div>
                <img className={'me'} src={me}  alt='beingMe' width='320' height='320' />
                
              </div>
              
                <MyCard/>
                
                <BlogRoom />
                <PhotoGallery />
                
                <GirlCoder/>
                
                <TechLife/>
                
            </div>
        );
    }
}

export default Tonya;