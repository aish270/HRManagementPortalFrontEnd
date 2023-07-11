import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css'
import { Link } from 'react-router-dom';

function SideBar(){
  return (
    <Menu>
      <Link to='/sign-up' className='menu-item'>
        Home
      </Link>
      <Link to='/sign-up' className='menu-item'>
        Policies
      </Link>
      <Link to='/sign-up' className='menu-item'>
        Attendance
      </Link>
      <Link to='/sign-up' className='menu-item'>
       Projects
      </Link>
      <Link to='/sign-up' className='menu-item'>
       Progress
      </Link>

     
       
    </Menu>
  );
};
export default SideBar