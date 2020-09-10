import React, {Component} from 'react';
import built from '../../Assets/built.jpg';
import video from '../../Assets/blackHistory1.mp4'
import video2 from '../../Assets/blackHistory2.mp4'


class BlogRoom extends Component {
  
  render() {
    const playVideo = video || video2;
    
    const myCallback = () => {
      let myvid = document.getElementById('myvideo');
      if (myvid.duration <= 40) {
        myvid.src = video2;
        myvid.play();
      }else {console.log('------------------------>', );}
    };
    
    return (
      <div className={'blog'}>
        <div className={'blogRoom'}>Blog Room</div>
        <ul className={'blogList'}>
          <li>
            <a
              href={' https://news.microsoft.com/on-the-issues/2020/09/02/digital-skills-grants-icstars-tech-diversity/'}
              className={'blogTitle'}
              target="_blank"> Microsoft: On the Issues
            </a>
          </li><li>
            <a
              href={'https://www.linkedin.com/pulse/change-starts-reimagining-yolanda-seals-coffield/'}
              className={'blogTitle'}
              target="_blank">
              Change starts by reimagining <span className={'BlogAuthor'}>by: Yolanda Seals Coffield</span>
            </a>
          </li>
          <br />
          <li className={'builtTitle'}>
            <a
              href="https://www.builtinchicago.org/2020/03/12/why-engineers-use-pair-programming?utm_source=press_kit&utm_medium=social_media&utm_campaign=statsperform"
              className={'blogTitle'}
              target="_blank">
              Built In Chicago: How These Chicago Tech Companies Use Pair Programming
            </a>
            <img src={built} alt="BIT" width={'40%'} align={'top'} className={'built'}/>
          </li>
          <li className={'blogTitle bh'}>
            What Black History means to me
            <video onEnded={() => myCallback()} id={'myvideo'} src={playVideo} width="370" height="225" controls>
                    </video>
          </li>
        </ul>
      </div>
    )
    
  };
};

export default BlogRoom;