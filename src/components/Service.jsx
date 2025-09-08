import React from 'react'

const Service = () => {
  return (
    <div className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
                <h1 className='text-3xl md:text-4xl text-dark font-bold'>Why Elitehost</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='w-[100%] h-80 border border-[#9824f4]/80 rounded-2xl shadow-2xl p-10'>
                <div className='w-20 h-20 rounded-full bg-amber-600/20 flex items-center justify-center mb-6'>
                    <img src="/images/Free WHM & cPanel.png" alt="cPanel" />
                </div>
                <h3 className='text-xl text-dark font-bold mb-6 '>Free WHM & cPanel</h3>
                <p className='text-dark/80'>We guarantee it you don't have to worry about it.</p>
                </div>
          


                <div className='w-[100%] h-80 border border-[#9824f4]/80 rounded-2xl shadow-2xl p-10'>
                <div className='w-20 h-20 rounded-full  bg-amber-600/20 flex items-center justify-center mb-6'>
                    <img src="/images/Performance_Optimized_icon.png" alt="Performance" />
                </div>
                <h3 className='text-xl text-dark font-bold mb-6 '>Performance Optimized</h3>
                <p className='text-dark/80'>If your website is slow or down then you losing Customers.</p>
                </div>


                <div className='w-[100%] h-80 border border-[#9824f4]/80 rounded-2xl shadow-2xl p-10'>
                <div className='w-20 h-20 rounded-full  bg-amber-600/20 flex items-center justify-center mb-6'>
                    <img src="/images/Super Easy to Use-icon.png" alt="" />
                </div>
                <h3 className='text-xl text-dark font-bold mb-6 '>Super Easy to Use</h3>
                <p className='text-dark/80'>Our custom control panel to use and removes the headache.</p>
                </div>


                <div className='w-[100%] h-80 border border-[#9824f4]/80 rounded-2xl shadow-2xl p-10'>
                <div className='w-20 h-20 rounded-full  bg-amber-600/20 flex items-center justify-center mb-6'>
                    <img src="/images/Expert_Support-icon.png" alt="Expert Support" />
                </div>
                <h3 className='text-xl text-dark font-bold mb-6 '>24/7 Expert Support</h3>
                <p className='text-dark/80'>Our custom control panel to use and removes the headache</p>
                </div>

            </div>

        </div>
     
    </div>
  )
}

export default Service
