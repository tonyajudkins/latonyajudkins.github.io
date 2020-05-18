import React from 'react';
import built from '../../Assets/built.jpg';
import video from '../../Assets/blackHistory.mp4'

const BlogRoom = () => {
  
  return (
    <div className={'blog'}>
      <div className={'blogRoom'}>Blog Room</div>
      <ul>
        <li>
          <a
            href={'https://www.linkedin.com/pulse/change-starts-reimagining-yolanda-seals-coffield/'}
            className={'blogTitle'}
            target="_blank">
            Change starts by reimagining <span className={'BlogAuthor'}>by: Yolanda Seals Coffield</span>
          </a>
        </li>
        <li>
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
          <video src={video} width="370" height="225" controls>
                    </video>
        </li>
      </ul>
    </div>
  )
  
};

export default BlogRoom;