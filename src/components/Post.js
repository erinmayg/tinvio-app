import React from 'react';

function Post({ title, body }) {
  return (
    <div className='post-container'>
      <div className='title'>
        <h1>{title.charAt(0).toUpperCase() + title.substring(1)}</h1>
      </div>
      <p>{body.charAt(0).toUpperCase() + body.substring(1)}</p>
    </div>
  );
}

export default Post;
