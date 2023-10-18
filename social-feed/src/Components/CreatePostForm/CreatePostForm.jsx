import React, { useState } from 'react';


const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let newPost = {
            name: name,
            comment: comment
        };
        console.log(newPost);
        props.addNewPostP(newPost);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            <label>Post</label>
            <input type="text" value={comment} onChange={(e)=> setComment(e.target.value)}/>
            <button type='submit'>Post</button>
        </form>
     );
}
 
export default CreatePostForm;