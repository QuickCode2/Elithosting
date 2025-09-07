import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

export const Support = () => {
  return (
    <div className='py-20 bg-white mx-2'>
        <div className='container ma-auto px-6'>
            <div className='flex flex-col md:flex-row items-center'>
                <div className='w-full md:w1/2 mt-15 rounded-2xl overflow-hidden'>
                    <img src="public/images/Support for Your Success.png" alt="" />
                </div>
                <div className='w-full md:w1/2 p-8 ml-16'>
                    <h1 className='text-4xl md:text-5xl text-dark font-bold mb-6'>24/7 Support for Your Success</h1>

                    <ul className='space-y-4 '>
                        <li className='flex items-center gap-4'>
                            <FaCheckCircle className='text-[#9824f4] -mt-3' />
                            <span className='block max-w-md'>Ensure support ia available including weekends and holidays.</span>
                        </li>

                         <li className='flex items-center gap-4'>
                            <FaCheckCircle className='text-[#9824f4] -mt-3' />
                            <span className='block max-w-md'>Ensure Implement a CDN to deliver content quickly to users worldwide.</span>
                        </li>

                         <li className='flex items-center gap-4'>
                            <FaCheckCircle className='text-[#9824f4] -mt-3' />
                            <span className='block max-w-md'>Offer various support channels such as live chat, emai, phone, and a ticketing system.</span>
                        </li>

                         <li className='flex items-center gap-4'>
                            <FaCheckCircle className='text-[#9824f4] -mt-3' />
                            <span className='block max-w-md'>Aim for rapid response times to customer inquiries to minimize downtime and frustration.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
