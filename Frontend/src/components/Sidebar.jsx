import React from 'react';
import SearchInput from './SearchInput';
import Conversation from './Conversation';
import LogoutBtn from './LogoutBtn';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white p-6">
      <div className='py-2'>
      <SearchInput/>
      </div>
      <hr />
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <LogoutBtn/>
    </div>
  );
};

export default Sidebar;
