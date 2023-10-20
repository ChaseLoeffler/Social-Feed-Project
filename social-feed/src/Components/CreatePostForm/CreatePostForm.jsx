import React, { useState } from 'react';
import './CreatePostForm.css'

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
        <form className='border-box' onSubmit={handleSubmit}>
            <div className='form-group'>
            <label>Name</label>
            <input type="text" className= "form-control" value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className='form-group'>
            <label>Post</label>
            <textarea type="text" className= "form-control" value={comment} onChange={(e)=> setComment(e.target.value)}></textarea>
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Post</button>
        </form>
     );
}
 
export default CreatePostForm;