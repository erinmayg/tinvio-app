import React from 'react';
import { ReactComponent as BackButton } from '../assets/back.svg';

function ViewPost(props) {
  return (
    <div className='viewPost'>
      <div className='container'>
        <h1>
          {props.post?.title.charAt(0).toUpperCase() +
            props.post?.title.substring(1)}
        </h1>
        <p>
          {props.post?.body.charAt(0).toUpperCase() +
            props.post?.body.substring(1)}
        </p>
        <BackButton onClick={() => props.setPost(null)} />
      </div>
    </div>
  );
}

export default ViewPost;
