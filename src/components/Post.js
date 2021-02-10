import React from 'react';

function Post({ post, setPost }) {
  return (
    <div
      className='post-container'
      onClick={() => {
        setPost(post);
      }}
    >
      <div className='title'>
        <h1>{post.title.charAt(0).toUpperCase() + post.title.substring(1)}</h1>
      </div>
      <p>{post.body.charAt(0).toUpperCase() + post.body.substring(1)}</p>
    </div>
  );
}

export default Post;
