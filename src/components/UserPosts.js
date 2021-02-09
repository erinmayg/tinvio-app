import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

function UserPosts({ user }) {
  const [posts, setPosts] = useState([]);

  const baseURL = 'https://jsonplaceholder.typicode.com/posts?userId=';

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(baseURL + user?.id);
        setPosts(Object.values(response)[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  });

  return (
    <div className='container'>
      <div className='posts-content'>
        <h1>{user?.name?.split(' ')[0]}'s Posts</h1>
        <h2>{posts.length} Posts</h2>
        <div className='posts'>
          {posts.map((post, i) => {
            return <Post title={post.title} body={post.body} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserPosts;
