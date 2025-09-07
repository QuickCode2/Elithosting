import React from 'react'
import { FaServer, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaCloud  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";


const Hosting = () => {
  return (
    // Web Hosting
  <div className='py-0 bg-white'>
 <div className='container mx-auto md:px-20 px-2'>
  <div className='text-center mb-10 pt-40'>
    <h1 className='text-4xl md:text-5xl text-dark font-bold mb-4'>Web Hosting Solution</h1>
    <p className='text-dark/80'>Find the perfect hosting plan for your website needs</p>
  </div>

  <div className='flex flex-col md:flex-row items-center'>
    <div className='w-full md:w-1/2 p-8 md:ml-16'>
    <FaServer className="text-3xl text-[#9824f4] mb-6" />

      <h1 className='text-4xl md:text-5xl text-dark font-bold mb-6'>Shared Hosting</h1>
      <ul className='space-y-4'>
        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>Perfect for beginners and small websites. Get started with our affordable shared hosting plan.</span>
        </li>

        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>Easy-to-use control panel.</span>
        </li>

        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>One-click WordPress install.</span>
        </li>

        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>Free website migration.</span>
        </li>
      </ul>
      <a className='text-dark font-bold flex items-center gap-2 mt-6 hover:text-[#9824f4] transition-colors' href="#">
        View Details
        <FaArrowRightLong />
      </a>
    </div>

    <div className='md:w-7xl w-2xl rounded-2xl overflow-hidden mt-8 md:mt-0'>
      <img src="https://www.qualitysmi.com.br/imagens/main/blog/paginas/agencia4.png" alt="" className='w-full h-auto object-cover' />
    </div>
  </div>
</div>

{/* Vps Hosting */}
<div className='flex flex-col md:flex-row items-center justify-center mt-16 md:px-20 px-2'>
  <div className='md:w-7xl w-2xl rounded-2xl overflow-hidden mt-8 md:mt-0'>
    <img src="https://www.qualitysmi.com.br/imagens/main/blog/paginas/agencia3.png" alt="" className='w-full h-auto object-cover' />
  </div>
  <div className='w-full md:w-1/2 p-8 md:ml-8 ml-0 text-center md:text-left'>
    <FaCloud className='text-4xl text-[#9824f4] mb-6 mx-5 md:mx-0' />
    <h1 className='text-4xl md:text-5xl text-dark font-bold mb-4 md:mb-2 md:mx-0'>Vps Hosting</h1>
    <p className='text-xl text-dark/80 md:mr-36 m-0'>
      Get more power and flexibility with our Virtual Private Server solution.
    </p>
    <div>
      <ul className='space-y-4 mt-6'>
        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>Dedicated resources</span>
        </li>
        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>Full root access</span>
        </li>
        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>Scalable resources</span>
        </li>
      </ul>
      <a className='text-dark font-bold flex items-center gap-2 mt-6 hover:text-[#9824f4] transition-colors' href="#">
        View Details
        <FaArrowRightLong />
      </a>
    </div>
  </div>
</div>
 

{/* Dedicated Server */}
 <div className='container mx-auto md:px-20 px-0'>
  <div className='flex flex-col md:flex-row items-center'>
    <div className='w-full md:w-1/2 p-8 md:ml-16'>
      <FaDatabase className='text-3xl text-[#9824f4] mb-6'/>
      <h1 className='text-4xl md:text-5xl text-dark font-bold mb-6'>Dedicated Server</h1>
      <ul className='space-y-4 '>
        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>Maximum performance and security with your own dedicated server.</span>
        </li>

        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>Entire server resources.</span>
        </li>

        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>Enhanced security.</span>
        </li>

        <li className='flex items-start gap-4'>
          <FaCheckCircle className='text-[#9824f4] text-2xl mt-1 min-w-[24px]' />
          <span className='block max-w-md'>24/7 monitoring.</span>
        </li>
      </ul>
       <a className='text-dark font-bold flex items-center gap-2 mt-6 hover:text-[#9824f4] transition-colors' href="#">
        View Details
        <FaArrowRightLong />
      </a>
    </div>

    <div className='md:w-7xl w-2xl rounded-2xl overflow-hidden mt-8 md:mt-0'>
      <img src="https://www.qualitysmi.com.br/imagens/main/blog/paginas/agencia1.png" alt="" />
    </div>
  </div>
</div>

      {/* Footer */}
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
  </div>

    
  )
}

export default Hosting
