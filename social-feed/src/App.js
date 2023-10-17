import React, { useState } from 'react';
import Post from './Components/Post/Post';

function App() {

  const [posts,setPosts] = useState([{name: 'Chase Loeffler',comment: 'New platform new post, exicted to use this app.', date: '10-17-2023'}])


  return (
    <div>
      <Post parentPost ={posts} />
    </div>
  );
}

export default App;
