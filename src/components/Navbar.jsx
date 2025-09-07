import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='w-full h-22 bg-white fixed z-50 shadow'>
      <div className='flex items-center justify-between px-6 sm:px-12 md:px-24 py-8'>

         {/* Menu items */}
      <div className='flex items-center space-x-6'> 
        <div className='flex items-center gap-2'>
           <FaServer className='text-[#9824f4] text-2xl ' />
             <span className='text-2xl font-bold text-dark'>Elithosting</span>
        </div>


        <div className='hidden md:flex items-center space-x-6 font-semibold text-dark ml-6'>
      <Link 
        className={location.pathname === '/' ? "text-[#9824f4]" : ""}  to={'/'}>Home</Link>
      <Link 
        className={location.pathname === '/hosting' ? "text-[#9824f4]" : ""} to={'/hosting'}>Hosting
      </Link>
      <Link 
        className={location.pathname === '/domain' ? "text-[#9824f4]" : ""} to={'/domain'}>Domain
      </Link>
      <Link 
        className={location.pathname === '/about' ? "text-[#9824f4]" : ""} to={'/about'}>About
      </Link>
      <Link 
        className={location.pathname === '/contact' ? "text-[#9824f4]" : ""} to={'/contact'}>Contact
      </Link>
    </div>
</div> 

        {/* Auth buttons */}
        <div className='hidden md:flex items-center space-x-4'>
          <Link className='text-dark font-semibold cursor-pointer rounded' to={'/auth'}>Login</Link>
          <Link className='px-6 py-2.5 font-semibold cursor-pointer rounded bg-[#9824f4] text-white' to={'/auth'}>Sign Up</Link>
        </div>
 
        
        {/* Mobile Version */}
        <div className="md:hidden z-20">
          {showMenu ? (
            <FaXmark className="text-2xl cursor-pointer" onClick={() => setShowMenu(false)}/>
            ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={() => setShowMenu(true)}/>
          )}
        </div>
      </div>

   {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="md:hidden flex flex-col items-center justify-center space-y-6 
        font-semibold text-white fixed w-64 h-screen bg-[#9824f4] top-0 right-0">
          <Link  onClick={() => setShowMenu(false)} to={"/"}>Home</Link>
          <Link  onClick={() => setShowMenu(false)} to={"/hosting"} >Hosting</Link>
          <Link  onClick={() => setShowMenu(false)} to={"/domain"} >Domain</Link>
          <Link  onClick={() => setShowMenu(false)} to={"/about"} >About</Link>
          <Link  onClick={() => setShowMenu(false)} to={"/contact"} >Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar

