import React, {Component} from 'react';
import me from '../Assets/Tmiling.jpg';
import BlogRoom from "./Components/BlogRoom";
import PhotoGallery from "./Components/PhotoGallery";
import TechLife from "./Components/TechLife";
import MyCard from "./Components/myCard";
import Portfolio from "./Components/Portfolio";
import NavBar from "./Components/NavBar";

class Tonya extends Component {
    render() {
        return (
            <div className={'container'}>
              
              <NavBar/>
              
              <div className={'top'}>
                <div className={'header'}>
                  <div className={'myName'}>Tonya Judkins</div>
                  <div className={'subTitle'}><span role="img"> 👩🏽‍💻 </span>Girl Coder</div>
                  <img className={'me'} src={me}  alt='beingMe' />
              </div>
                <MyCard/>
              </div>
              
                <Portfolio/>
  
               <TechLife />
               
                <BlogRoom />
              
  
              <div className={'photo'} >
                <PhotoGallery />
              </div>
              
              
            </div>
        );
    }
}

export default Tonya;
