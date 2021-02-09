import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Avatar } from '../assets/user.svg';

function ViewUsers(props) {
  const baseURL = 'https://jsonplaceholder.typicode.com/users/';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(baseURL);
        setUsers(Object.values(response)[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className='viewUsers'>
      <div className='container'>
        {users.map((user, i) => {
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
