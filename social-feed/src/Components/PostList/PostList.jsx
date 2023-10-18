import React, { useState } from 'react';
import Post from "../Post/Post";


const PostList = (props) => {
    return ( 
        <table>
            <tr>
                <Post parentPost = {props.firstPost}/>
            </tr>
        </table>
     );
}
 
export default PostList;