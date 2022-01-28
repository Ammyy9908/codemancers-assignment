import React from 'react';
import { connect } from 'react-redux';
import "./NewPostModal.css";
import getGifs from '../utils/fetch_gifs'
function NewPostModal({setMessages,modal,setModal,setGifInput,gifInput}) {
    const [message,setMessage] = React.useState("");
    const [gif,setGif] = React.useState("");
    const [gifKey,setGifKey] = React.useState("");
    const [gifs,setGifs] = React.useState([]);


    const handleMessageSend= ()=>{

        const messageObj = {
            message,
            gif
        }
        if(message){
            setMessages(messageObj);  
            setMessage("");
            setGif("");
            setModal(false); 
        }
    }

    const handleClose = (e)=>{
        const target_class = e.target.classList;
        if(target_class.contains("new_post_modal_background") || target_class.contains("modal-close-btn")){
            setModal(false);
        }
       
    }


    const handleGifSearch = ()=>{
        getGifs(gifKey).then((data)=>{
            console.log(data)
            if(data){
                setGifs(data.data);
            }
        }).catch((e)=>{
            console.log(e);
        })
    }

    const handleGifToogle = ()=>{
        setGifInput(true);
    }

    const handleImageSelect = (e)=>{
    setGif(e.target.children[0].src);
    setGifInput(false);
    }
  return <>{modal && <div className='new_post_modal_background' onClick={handleClose}>
        <div className="new_post_modal">
            <div className="new_post_modal_header">
                <h3>Create Post</h3>
                <button className="modal-close-btn">
                    <i className="fa fa-times"></i>
                </button>
            </div>

                <textarea name="message" id=""message cols="30" rows="10" className="new_post_input_message" placeholder={"What's on your mind?"} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

                <button className="choose-gif"  onClick={!gifInput && handleGifToogle}>

                    {gifInput && <div className="gif-input_box">
                        <div className="gif_select_container">
                            <div className="gif-serchbox">
                                <input type="text" name="gifkey" id="gifkey"  placeholder='Search Gifs' value={gifKey} onChange={(e)=>setGifKey(e.target.value)}/>
                                <button className="search-btn" onClick={handleGifSearch}>Find Gif</button>
                            </div>

                            <div className="gifs">
                              
                                
                                {
                                    gifs.map((gif,i)=>{
                                        return<div className="gif-box" onClick={handleImageSelect}>
                                            <img src={gif.images.original.url} alt="" />
                                        </div>;
                                    })
                                }
                            </div>
                        </div>
                    </div>}
                    {!gif?"Add a gif":"Change Gif"}
                </button>

                <button className="send_post" onClick={handleMessageSend}>Post</button>

                </div>

  </div>}</>;
}




const mapStateToProps = (state)=>({
    modal:state.appReducer.modal,
    gifInput:state.appReducer.gifInput
})
const mapDispatchToProps = (dispatch)=>({
    setMessages: (message)=>dispatch({type:"ADD_MESSAGE",message}),
    setModal:(modal)=>dispatch({type:"SET_MODAL",modal}),
    setGifInput:(gifInput)=>dispatch({type:"SET_GIF_MODAL",gifInput})
})



export default connect(mapStateToProps,mapDispatchToProps)(NewPostModal);
