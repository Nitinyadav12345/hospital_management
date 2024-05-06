import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='bg-[#3F72AF] rounded-lg flex flex-row mt-4  items-center py-4'>
            <div className='mx-2 hover:bg-blue-400 rounded-sm px-2 py-1'><span>Home</span></div>
            <div className='mx-2 hover:bg-blue-400 rounded-sm px-2 py-1'><span>Departments</span></div>
            <div className='mx-2 hover:bg-blue-400 rounded-sm px-2 py-1'><span>Doctors</span></div>
            <div className='mx-2 hover:bg-blue-400 rounded-sm px-2 py-1'><span>About us</span></div>
        </div>
    </div>
  )
}

export default Navbar
