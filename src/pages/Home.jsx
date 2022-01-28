import React from 'react';
import { connect } from 'react-redux';
import BlankPostCard from '../components/BlankPostCard';
import NewPostBox from '../components/NewPostBox';
import NewPostModal from '../components/NewPostModal';
import PostCard from '../components/PostCard';
import "./Home.css"

function Home({messages,setModal}) {
    const [rendered,setRendered] = React.useState(false);

    React.useEffect(()=>{
        setTimeout(()=>{
            setRendered(true);
        },5000);
    },[]);
  return <div className='home'>
      <div className="home_container">
      <NewPostBox setModal={setModal}/>

      <NewPostModal/>

      <div className="posts">
         
          {!rendered && <><BlankPostCard/>
          <BlankPostCard/>
          <BlankPostCard/>
          <BlankPostCard/></>}

          {rendered && messages.map((message,i)=>{
              return  <PostCard key={message.id} gif={message.gif} message={message.message}/>
          })}
      </div>
      </div>
  </div>;
}


const mapStateToProps = (state)=>({
    messages:state.appReducer.messages
})

const mapDispatchToProps = (dispatch)=>({
    setModal:(modal)=>dispatch({type:"SET_MODAL",modal}),
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
