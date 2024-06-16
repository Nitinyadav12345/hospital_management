import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
    <img className=' w-10' src="https://img.icons8.com/?size=100&id=iQj4ngpeWVYC&format=png&color=000000" alt="logo"  /> HMS
    </a>
    
  </div>
  <div className="flex-none">
  <button className="btn btn-error">Emergency Contact</button>
  </div>
</div>
    </div>
  )
}

export default Header
