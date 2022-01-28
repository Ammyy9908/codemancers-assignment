import React from 'react';
import "./PostCard.css";
function PostCard({message,gif}) {
  return <div className='post-card'>
      <div className="postcard-wrapper">
          <p>{message}</p>
         { gif && <img src={gif} alt="" />}
      </div>
  </div>;
}

export default PostCard;
