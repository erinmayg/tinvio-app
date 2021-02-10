import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import { css } from '@emotion/core';
import Loader from 'react-spinners/ClipLoader';

function UserPosts(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseURL = 'https://jsonplaceholder.typicode.com/posts?userId=';
  const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-color: salmon;
  `;

  useEffect(() => {
    async function getPosts() {
      try {
        await axios
          .get(baseURL + props.user?.id)
          .then((response) => setPosts(Object.values(response)[0]));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  });

  return (
    <div className='container'>
      <Loader loading={loading} css={override} />
      {!loading && (
        <div className='posts-content'>
          <h1>{props.user?.name?.split(' ')[0]}'s Posts</h1>
          <h2>{posts.length} Posts</h2>
          <div className='posts'>
            {posts.map((post, i) => {
              return <Post key={i} post={post} setPost={props.setPost} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPosts;
