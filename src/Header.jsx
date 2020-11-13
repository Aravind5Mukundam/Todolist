import React from 'react';
import logo from './Images/logo.png'



const Header = () => {
  return (
      <>
          <div className="header"> 
            <img  src={logo} alt ="logo" width='70'  height='60'/>
            <h1 className="h1">To Do List</h1>
          </div>
      </>
  );
}

export default Header;