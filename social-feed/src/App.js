import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';

function App() {
  const [posts,setPosts] = useState([{name: 'Chase Loeffler',comment: 'New platform new post, exicted to use this app.', date: '10-17-2023'}])


  return (
    <div>
      <CreatePostForm/>
      <PostList firstPost ={posts}/>
    </div>
  );
}

export default App;
