import React, { useState } from 'react';
import Post from "../Post/Post";


const PostList = (props) => {

    const posts = props.firstPost.map((post,index) => (
        <Post key={index} name={post.name} comment={post.comment}/>
    ))
    return ( 
        <div>
            {posts}
        </div>
     );
}
 
export default PostList;