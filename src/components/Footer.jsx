import React from 'react'
import { FaServer, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='py-20 bg-gray-700 p-8'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='flex flex-col items-start'>
              <div className='flex items-center gap-2 mb-6'>
              <FaServer className='text-2xl font-bold text-[#9824f4]'/>
              <span className='text-2xl font-bold text-white'>Elithosting</span>
              </div>
              <p className='text-gray-400 mb-6'>Premium web hosting solution with blazing fast speed and reliable performance.</p>

            
              <div className='flex items-center gap-4 text-gray-400'>
                <a href="#"><FaTwitter className='hover:text-white cursor-pointer'/></a>
                <a href="https://www.facebook.com/niteshahiniya?mibextid=ZbWKwL "><FaFacebookF className='hover:text-white cursor-pointer'/></a>
                <a href="https://www.linkedin.com/in/nitesh-ahiniya-6b745a2b7"><FaLinkedinIn className='hover:text-white cursor-pointer'/></a>
                <a href="https://www.instagram.com/nitesh_ahiniya2?igsh=MXRxc2VjaXB0Z3lxNQ==&utm_source=ig_contact_invite"><FaInstagram className='hover:text-white cursor-pointer'/></a>
              </div>
            </div>

            <div className='flex flex-col items-start'>
              <h3 className='text-2xl text-white font-bold mb-8'>Services</h3>
              <ul className='space-y-4 text-gray-400'>
              <li className='hover:text-white'>
                <Link to="/web-hosting">Web Hosting</Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/vps-hosting">VPS Hosting</Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/dedicated-server">Dedicated Server</Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/domain">Domain Name</Link>
              </li>
            </ul>
            </div>

              <div className='flex flex-col items-start'>
              <h3 className='text-2xl text-white font-bold mb-8'>Company</h3>
              <ul className='space-y-4 text-gray-400'>
              <li className='hover:text-white'>
                <Link to="/About Us">About Us</Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/Blog">Blog</Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/Careers">Careers</Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/Press">Press</Link>
              </li>
            </ul>
            </div>


            <div className='flex flex-col items-start'>
              <h3 className='text-2xl text-white font-bold mb-8'>Support</h3>
              <ul className='space-y-4 text-gray-400'>
              <li className='hover:text-white'>
                <Link to="/Help Center">Help Center</Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/Contact">Contact</Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/Privacy Policy">Privacy Policy</Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/Team of Service">Team of Service</Link>
              </li>
            </ul>
            </div>


          </div>
        </div>
      
    </div>
  )
}

export default Footer
