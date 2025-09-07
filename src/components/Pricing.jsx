import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
                <h1 className='text-3xl md:text-4xl text-dark font-bold mb-6'>Choose Hosting Plan</h1>
                <p className='text-dark/80 max-w-md mx-auto'>Globally incubate next-generation e-service via state of the art technology.</p>
            </div>

    
<div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:w-[90%] md:ml-16 mx-0'>
  {/* First-card */}
  <div className='bg-white rounded-2xl shadow overflow-hidden p-10 border border-[#9824f4]'>
    <h3 className='text-3xl text-dark font-bold mb-6'>Started</h3>
    <p className='text-dark/80 mb-6'>Perfect for small website and blogs</p>
    <p className='text-dark/80 mb-8'>
      <span className='text-3xl text-dark font-bold'>$2.99</span>
      <span>/month</span>
    </p>
    <button className='w-full px-6 py-2.5 bg-gray-200 rounded text-center cursor-pointer'>
      Get Started
    </button>
    <ul className='mt-8 space-y-4'>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>1 website</span>
      </li>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>10 GB SSD Storage</span>
      </li>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>Unlimited Bandwidth</span>
      </li>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>Free SSL Certificate</span>
      </li>
    </ul>
  </div>


  {/* Second-card */}
<div className="relative border border-[#9824f4] rounded-2xl p-6 shadow-md">
  {/* Popular Badge */}
  <div className="absolute bg-[#9824f4] text-white px-5 py-2 rounded-tr-2xl rounded-bl-2xl top-0 right-0 text-sm font-medium">
    Popular
  </div> 
  
    <h3 className='text-3xl text-dark font-bold mb-6'>Business</h3>
    <p className='text-dark/80 mb-6'>Ideal For business growing</p>
    <p className='text-dark/80 mb-8'>
      <span className='text-3xl text-dark font-bold'>$5.99</span>
      <span>/month</span>
    </p>
    <button className='w-full px-6 py-2.5 bg-[#9824f4] text-white rounded text-center cursor-pointer'>
      Get Started
    </button>
    <ul className='mt-8 space-y-4'>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>5 websites</span>
      </li>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>50 GB SSD Storage</span>
      </li>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>Unlimited Bandwidth</span>
      </li>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>Free SSL Certificate</span>
      </li>
    </ul>
  </div>

  {/* Third-card */}
  <div className='bg-white rounded-2xl shadow overflow-hidden p-10 border border-[#9824f4]'>
    <h3 className='text-3xl text-dark font-bold mb-6'>Pro</h3>
    <p className='text-dark/80 mb-6'>For businesses and agencies</p>
    <p className='text-dark/80 mb-8'>
      <span className='text-3xl text-dark font-bold'>$9.99</span>
      <span>/month</span>
    </p>
    <button className='w-full px-6 py-2.5 bg-gray-200 rounded text-center cursor-pointer'>
      Get Started
    </button>
    <ul className='mt-8 space-y-4'>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>Unlimited websites</span>
      </li>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>200 GB SSD Storage</span>
      </li>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>Unlimited Bandwidth</span>
      </li>
      <li className='flex items-center gap-2'>
        <FaCheckCircle className='text-[#9824f4]' />
        <span className='text-dark/80'>Free SSL Certificate</span>
      </li>
    </ul>
  </div>
</div>

    
    
        </div>
      
    </div>
  )
}

export default Pricing
