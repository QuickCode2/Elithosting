import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Frature = () => {
  return (
    <div className='py-15 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='text-center'>
          <h1 className='text-3xl md:text-4xl text-dark font-bold mb-4'>We Provide Hosting Solution</h1>
            <p className='text-dark/80 max-w-xl mx-auto pb-10'>select your solution and we will help you narrow down
            our best high-speed option to fit your needs.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:w-[90%] md:ml-20 mx-0'>
          <div className='bg-white p-12 rounded-2xl border border-[#9824f4]'>
            <img className='md-6 mb-5' src="https://cdn-icons-png.flaticon.com/128/15985/15985474.png" alt="" />
            <h3 className='text-xl text-dark font-bold mb-4'>Shared Hosting</h3>
            <p className='text-dark/80 mb-6'>Shared Hosting The most populer hosting plan available and comes at one of the most</p>
            <a className='flex items-center gap-2' href="#">
              View Details
              <FaArrowRightLong />
            </a>
          </div>

             <div className='bg-white p-12 rounded-2xl border border-[#9824f4]'>
            <img className='md-6 mb-5' src="https://cdn-icons-png.flaticon.com/128/12265/12265415.png" alt="" />
            <h3 className='text-xl text-dark font-bold mb-4'>WordPress Hosting</h3>
            <p className='text-dark/80 mb-6'>WordPress Hosting gives you speed and performance with a full of features.</p>
            <a className='flex items-center gap-2' href="#">
              View Details
              <FaArrowRightLong />
            </a>
          </div>

             <div className='bg-white p-12 rounded-2xl border border-[#9824f4]'>
            <img className='md-6 mb-5' src="https://cdn-icons-png.flaticon.com/128/11748/11748276.png" alt="" />
            <h3 className='text-xl text-dark font-bold mb-4'>Cloud Hosting</h3>
            <p className='text-dark/80 mb-6'>Earn additional revenue or support your customers with easy-to-use reseller.</p>
            <a className='flex items-center gap-2' href="#">
              View Details
              <FaArrowRightLong />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Frature
