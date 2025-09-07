import React from 'react'
import { FaServer, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,} from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='pt-40 bg-white'>
      <div className='container mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-4'>About ElitHosting</h1>
          <p className='text-xl text-dark/80'>Learn about our story and mission to provide the best hosting experience</p>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-12 mb-20'>
          <div className='w-full md:w-1/2 ml-20 mr-16'> 
          <h1 className='text-3xl text-dark font-bold mb-6'>Our Story</h1>
            <p className='text-xl text-dark/80 mb-6'>Founded in 2010, Elithost started with a simple mission: to make web hosting accessible, reliable, and affordable for everyone. </p>
              <p className='text-xl text-dark/80 mb-6'>What began as a small startup with a single server has grown into a global hosting provider with data centers around the world and thousands of satisfied customers.</p>
                <p className='text-xl text-dark/80 mb-6'>Today, we continue to innovate and expand our services while maintaining the personal touch that sets us apart from larger corporations.</p>
        </div>

        <div className='md:h-1/2'>
          <img className='h-auto w-[1000px]  object-cover' src="public/images/About/About ElitHosting.png" alt="" />
        </div>
        </div>

        <div className='text-center mb-22'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-6'>Part Of our team</h1>
          <p className='text-xl text-dark/80 max-w-2xl mx-auto'>
          Over the last 19 year,Site Ground has grown to more than A considerable number of our people started working</p>
        </div>

        <div className='max-w-4xl md:mx-auto mx-10 grid grid-cols-1 md:grid-cols-3 gap-20'>
          <div className='text-center w-65 shadow rounded-2xl'>
            <img className='object-cover w-full h-80 mb-4 rounded-2xl' src="public/images/About/Alice Johnson.png" alt="Team Member 1" />
            <h2 className='text-2xl text-dark font-semibold'>Alice Johnson</h2>
            <p className='text-dark/80'>CEO & Founder</p>
          </div>
          <div className='text-center w-65 shadow rounded-2xl'>
            <img className='object-cover w-full h-80 mb-4 rounded-2xl' src="public/images/About/Angila.png" alt="Team Member 2" />
            <h2 className='text-2xl text-dark font-semibold'>Angila</h2>
            <p className='text-dark/80'>Marketing</p>
          </div>
          <div className='text-center w-65 shadow rounded-2xl'>
            <img className='object-cover w-full h-80 mb-4 rounded-2xl' src="public/images/About/Michel Anderson.png" alt="Team Member 3" />
            <h2 className='text-2xl text-dark font-semibold'>Michel Anderson</h2>
            <p className='text-dark/80'>Digital Marketer</p>
          </div>
        </div>
      </div>
      

       {/* Footer */}
    <div className='py-20 bg-gray-700 p-8 mt-20'> 
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
    </div>
  )
}

export default About
