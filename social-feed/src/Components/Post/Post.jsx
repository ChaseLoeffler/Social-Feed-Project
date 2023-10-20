import React, { useState } from 'react';
import './Post.css'

const Post = (props) => {


    const [likeButtonClass, setLikeButtonClass] = useState();
    const [dislikeButtonClass, setDislikeButtonClass] = useState();

    function likeButtonClicked(){
        if(likeButtonClass === "inactive"){
            setLikeButtonClass("l-active");
        }
        else{
            setLikeButtonClass("inactive");
        }
    }
    function dislikeButtonClicked(){
        if(dislikeButtonClass === "inactive"){
            setDislikeButtonClass("d-active");
        }
        else{
            setDislikeButtonClass("inactive");
        }
    }


    return ( 
        <div>
        <div>
            <header>{props.name}</header>
            <p>{props.comment}</p>
        </div>
        <div>
            <button className={likeButtonClass} onClick={likeButtonClicked}><i className='fa fa-thumbs-up'></i></button>
            <button className={dislikeButtonClass} onClick={dislikeButtonClicked}><i className='fa fa-thumbs-down'></i></button>
        </div>
        <hr></hr>
        </div>
     );
}
 
export default Post;

