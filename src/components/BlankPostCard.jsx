import React from 'react';
import "./BlankPostCard.css";
function BlankPostCard() {
  return <div className='blank-post'>
        <div className="blank-post-wrapper">
            <span className="blank-post-message half-message"></span>
            <span className="blank-post-message full-message"></span>
            <div className="blank-post-image"></div>
        </div>
  </div>;
}

export default BlankPostCard;
