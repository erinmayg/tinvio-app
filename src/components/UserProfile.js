import React from 'react';
import header from '../assets/image.jpg';
import { ReactComponent as Phone } from '../assets/phone.svg';
import category from '../assets/category.png';
import { ReactComponent as Shop } from '../assets/icon-24-shop.svg';

function UserProfile({ user }) {
  function businessFormat(str) {
    try {
      let splitStr = str.split(' ');
      for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      str = splitStr.join(' • ');
      return str;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <img className='header' src={header} alt='header' />
      <div className='profile-data'>
        <h1>{user?.name}</h1>
        <div className='user-info'>
          <Phone /> <p>{user?.phone}</p>
        </div>
        <div className='user-info'>
          <img src={category} className='icon' alt='icon' />{' '}
          <p>{businessFormat(user?.company?.bs)}</p>
        </div>
        <div className='user-info'>
          <Shop />{' '}
          <p>
            {user?.address?.street}, {user?.address?.suite},{' '}
            {user?.address?.city} {user?.address?.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
