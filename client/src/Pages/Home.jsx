import React from 'react'
import Navbar from '../Components/Navbar'


const Home = () => {
  return (
    <div className=''>
        <div className='header flex items-center justify-between mt-2'>
            <div className="logo text-3xl text-blue-950">
                HMS
            </div>
            <div className="contact">
                <button className=' bg-[#112D4E] text-white text-2xl hover:bg-[#3F72AF]'>
                    Emergency Contact
                </button>
            </div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Home
