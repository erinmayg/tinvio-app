import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Avatar } from '../assets/user.svg';
import { css } from '@emotion/core';
import Loader from 'react-spinners/ClipLoader';

function ViewUsers(props) {
  const baseURL = 'https://jsonplaceholder.typicode.com/users/';
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-color: salmon;
  `;

  useEffect(() => {
    async function getUsers() {
      try {
        await axios
          .get(baseURL)
          .then((response) => setUsers(Object.values(response)[0]));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className='viewUsers'>
      <div className='container'>
        <Loader loading={loading} css={override} />
        {!loading &&
          users.map((user, i) => {
            return (
              <div
                className='user'
                onClick={() => {
                  props.setUser(user);
                  props.setShowMore(false);
                }}
              >
                <Avatar />
                <p>{user.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ViewUsers;
