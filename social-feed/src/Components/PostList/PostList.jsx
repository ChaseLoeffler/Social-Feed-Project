import React, { useState } from 'react';
import Post from "../Post/Post";
import './PostList.css'

const PostList = (props) => {

    const posts = props.firstPost.map((post,index) => (
        <Post key={index} name={post.name} comment={post.comment}/>
    ))
    return ( 
        <div className='posts-table'>
            {posts}
        </div>
     );
}
 
export default PostList;