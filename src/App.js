import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserProfile from './components/UserProfile';
import UserPosts from './components/UserPosts';
import ViewUsers from './components/ViewUsers';
import { ReactComponent as MoreButton } from './assets/more.svg';
import { ReactComponent as CloseButton } from './assets/close.svg';

function App() {
  const baseURL = 'https://jsonplaceholder.typicode.com/users/';

  const [user, setUser] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(baseURL + '1');
        setUser(Object.values(response)[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <div className={'App ' + (showMore ? 'hide-overflow' : '')}>
      <UserProfile user={user} />
      <UserPosts user={user} />
      {showMore && <ViewUsers setShowMore={setShowMore} setUser={setUser} />}
      {!showMore && <MoreButton onClick={() => setShowMore(true)} />}
      {showMore && <CloseButton onClick={() => setShowMore(false)} />}
    </div>
  );
}

export default App;
