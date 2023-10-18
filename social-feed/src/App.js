import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';

function App() {
  const [posts,setPosts] = useState([{name: 'Chase Loeffler',comment: 'New platform new post, exicted to use this app.'},{name: 'John Smith', comment: 'New phone who dis?'}])


  function addNewPost(post){

    let tempPost = [...posts, post];

    setPosts(tempPost);
  }

  return (
    <div>
      <CreatePostForm addNewPostP ={addNewPost}/>
      <PostList firstPost ={posts}/>
    </div>
  );
}

export default App;
