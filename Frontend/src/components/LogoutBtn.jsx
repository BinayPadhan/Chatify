import React from 'react'
import { MdLogout } from "react-icons/md";

function LogoutBtn() {
  return (
    <div className='absolute bottom-6 left-6'>
        <MdLogout className='w-6 h-6 cursor-pointer ' />
    </div>
  )
}

export default LogoutBtn