import React from 'react';
import "./NewPostBox.css";
function NewPostBox({setModal}) {
  return <div className='new_post_box' onClick={()=>{
    setModal(true)
  }}>
        <div className="new_post_box_container">
            <div className="new_post_box_avatar"></div>
            <div className="new_post_input">
                <span>What's on your mind?</span>
            </div>
        </div>
  </div>;
}

export default NewPostBox;
