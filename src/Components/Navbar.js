import React from 'react';
import logo from '../fonebook-header-logo.svg';
import avatar from '../avatar.jpg';

function Navbar() {
  return (
    <div>
      <nav className='navbar top-0 sticky bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md'>
        <div className='flex justify-between items-center h-20 px-6'>
          <div className='flex items-center'>
            <img 
              className='w-25 h-16 cursor-pointer bg-blue-200 rounded-full p-1 shadow-lg transition-transform transform hover:scale-110' 
              src={logo} 
              alt="logo" 
            />
            <span className='ml-3 text-white text-xl font-semibold'>
              My Website
            </span>
          </div>
          <div className='flex items-center'>
            <img 
              className='w-12 h-12 cursor-pointer rounded-full border-2 border-white shadow-lg transition-transform transform hover:scale-110' 
              src={avatar} 
              alt="avatar" 
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
