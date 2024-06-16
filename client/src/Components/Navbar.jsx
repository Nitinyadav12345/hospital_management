import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for routing

const Navbar = () => {
  const [profile, setProfile] = useState(false);

  // Dummy function to toggle profile state
  const toggleProfile = () => {
    setProfile(!profile);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1 space-x-5 ml-5">
          <a className='hover:text-teal-600' href="#">Home</a>
          <a className='hover:text-teal-600' href="#">Departments</a>
          <a className='hover:text-teal-600' href="#">Doctors</a>
          <a className='hover:text-teal-600' href="#">About us</a>
        </div>
        <div className="flex-none">
          {profile ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                onClick={toggleProfile} // Toggle profile on avatar click
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          ) : (
            <div className="space-x-3">
              <Link className="btn btn-error" to="/login">
                Login
              </Link>
              <button className="btn btn-primary" onClick={toggleProfile}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
