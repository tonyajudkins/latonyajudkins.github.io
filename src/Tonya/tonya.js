import React, {Component} from 'react';
import me from '../Assets/beingMe.jpg';

class Tonya extends Component {
    render() {
        return (
            <div>
                <div className={'myName'}>Tonya Judkins</div>
                <div className={'subTitle'}>-based on a true story</div>
                <img className={'me'} src={me}  alt='beingMe' width='300' height='320' />
                <footer className={'talkBubble'}>
                   <div> &nbsp;-Hello World</div>
                <div className={'beautiful'}>-Hello Beautiful</div>
            </footer>
            </div>
        );
    }
}

export default Tonya;