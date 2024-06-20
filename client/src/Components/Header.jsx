import React from 'react'

const Header = () => {
  return (
    <div className="mx-5">
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
    <img className=' w-10' src="https://img.icons8.com/?size=100&id=iQj4ngpeWVYC&format=png&color=000000" alt="logo"  /> 
    <span className=' font-extrabold text-2xl'>HMS</span>
    </a>
    
  </div>
  <div className="flex-none">
  <button className="btn btn-error"><span className='text-xl font-bold '>Emergency Contact</span></button>
  </div>
</div>
    </div>
  )
}

export default Header
