import React, { useState } from 'react';
import SearchInput from './SearchInput';
import LogoutBtn from './LogoutBtn';
import SearchList from './SearchList';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white p-6">
      <div className='py-2'>
      <SearchInput/>
      </div>
      <hr />
      <SearchList/>
      <LogoutBtn/>
    </div>
  );
};

export default Sidebar;
