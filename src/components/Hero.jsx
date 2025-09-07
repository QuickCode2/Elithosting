import React from 'react'

const Hero = () => {
  return (
      <div className='md:py-30 relativ'>
          {/* <div className='absolute inset-0 opacity-15'>
            <img className='object-center object-cover h-screen object-cover w-full h-full' src="https://img.freepik.com/free-vector/hand-drawn-blue-dots-background_23-2149574814.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
          </div> */}
          <div className='container mx-0 md:pl-20'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
              {/* left side */}
              <div className='w-full md:w1/2 mt-30'>
                <div className='flex flex-col'>
                  <div className='px-4 py-2.5 w-[300px] bg-[#9824f4]/40 text-white shadow rounded-full mb-6'>
                    <span className='text-dark font-semibold'>SuperCharge your website today 
                    </span>
                  </div>
                    <h1 className='text-3xl md:text-4xl text-dark font-bold mb-8'>
                      <span>Premium Web Hosting</span>
                      <br />
                      <span>Solution For Your Businuss</span>
                    </h1>
                    <p className='text-xl text-dark/80 font-semibold mb-8 md:mr-32'>
                      Lighting-fast hosting with 99.9% uptime,
                      top-notch security, and 24/7 expert support
                      to keep your website running hover.
                    </p>
                    <div className='relative flex items-center gep-4'>
                      <button className='px-8 py-3 bg-[#9824f4] text-white font-semibold cursor-pointer shadow-xl mr-4 rounded'>Get Started</button>
                      <button className='px-8 py-3 hover:text-[#9824f4] border-2 border-dark rounded cursor-pointer text-dark font-semibold shadow-xl'>Viwe Plan</button>
                    </div>
                </div>
              </div>
    
              {/* right side banner*/}
              <div className="md:w-[1200px] md:pr-20 justify-center">
                <img
                  className="w-auto h-auto object-contain"
                  src="https://images-www.contentful.com/jtqsy5pye0zd/2OLRrnrT6MIIIAVZBnLzDP/c4343b6dc7f089c977101d28a2bb7fd4/Home_Hero_-_Personalization_2x.png?w=1320&q=60&fm=webp"
                  alt="Hosting Illustration"
                />
            </div>
          </div>
    
           
            </div>
        </div>
  )
}

export default Hero


