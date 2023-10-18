import React, { useState } from 'react';


const CreatePostForm = (props) => {

    const [name, setName] = useState();
    const [post, setPost] = useState();


    return ( 
        <form>
            <label>Name</label>
            <input type="text"/>
            <label>Post</label>
            <input type="text" />
        </form>
     );
}
 
export default CreatePostForm;