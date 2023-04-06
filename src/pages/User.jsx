import React from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import './User.scss'
import UserDetails from '../components/UserDetails';
import Info from '../components/Info';
import UserInfo from '../components/UserInfo';

const User = () => {
  return (
    (
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <UserDetails/>
          <Info/>
          <UserInfo/>
        </div>
      </div>
    )
  );
};

export default User