import React, { useState } from 'react';   
import { FaServer, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Domain = () => {
  const [domain, setDomain] = useState("");
  const [extension, setExtension] = useState(".com");

  const handleSearch = () => {
    if (!domain) {
      alert("Please enter a domain name");
      return;
    }
    const fullDomain = domain + extension;
    alert(`You searched for: ${fullDomain}`);
  };

  return (
    <div className='bg-white'>
      <div className='container mx-auto px-2 py-20 '>
        <div className='text-center mb-10 mt-25'>
          <h2 className='text-4xl md:text-5xl text-dark font-bold mb-6'>
            Find Best Unique Domains Checker!
          </h2>
          <p className='text-xl text-dark/80 md:max-w-2xl mx-auto'>
            Web Hosting, Domain Name and Hosting Center Solutions
          </p>
        </div>

        <div className='bg-white rounded-xl max-w-3xl mx-auto py-8'>
          <div className='flex flex-col md:flex-row'>
            <input
              className='flex-grow px-4 py-3 border border-[#9824f4] rounded-l-md outline-none'
              placeholder='Enter your domain name'
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}/>
            <select
              className='px-4 py-3 border border-[#9824f4] outline-none'
              value={extension}
              onChange={(e) => setExtension(e.target.value)}>
              <option>.com</option>
              <option>.in</option>
              <option>.net</option>
              <option>.org</option>
              <option>.co</option>
              <option>.io</option>
            </select>
            <button
              className='bg-[#9824f4] text-white px-6 py-3 rounded-r-md font-medium cursor-pointer'
              onClick={handleSearch}>Search</button>
          </div>

          <div className='mt-20 text-center py-8 '>
            <h1 className='max-w-2xl mx-auto text-4xl md:text-5xl text-dark font-bold'>
              EliteHost Straight forward domain Pricing.
            </h1>
          </div>
        </div>
   

      
  <div className="flex flex-wrap gap-13 md:mx-20 mx-8 mt-10">
  {/* .online */}
  <div className="w-full h-[300px] sm:w-[45%] lg:w-[22%]  border border-[#9824f4] rounded-2xl p-6">
    <img className='w-[150px] mb-6 mt-5' src="https://blog.resellerspanel.com/wp-content/uploads/2020/01/dot-online-logo.png" alt=".online"/>
    <p className="text-dark/80 text-base mb-2">Think about why buy domain name in the first place</p>
    <h2 className="text-dark text-lg font-bold mb-4">$6.99</h2>
    <a href="#" className="text-[#9824f4] font-semibold inline-flex items-center gap-2 hover:underline">
      Get Offer <FaArrowRightLong className="text-[#9824f4]" />
    </a>
  </div>

  {/* .com */}
  <div className="w-full sm:w-[45%] lg:w-[22%]  border border-[#9824f4] rounded-2xl p-6">
    <img className='w-[110px] mb-8 mt-9' src="https://upload.wikimedia.org/wikipedia/commons/2/2e/.com_logo.png" alt=".com"/>
    <p className="text-dark/80 text-base mb-2">Think about why buy domain name in the first place</p>
    <h2 className="text-dark text-lg font-bold mb-4">$6.99</h2>
    <a href="#" className="text-[#9824f4] font-semibold inline-flex items-center gap-2 hover:underline">
      Get Offer <FaArrowRightLong className="text-[#9824f4]" />
    </a>
  </div>

  {/* .org */}
  <div className="w-full sm:w-[45%] lg:w-[22%]  border border-[#9824f4] rounded-2xl p-6">
    <img className='w-[100px] mb-8 mt-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_BdrFJNnUjJrAZ8uzcp7384bmNKasR5BUxCsc2digbWmrCii2tTNwqKCK1l8u8v13eg&usqp=CAU" alt=".org"/>
    <p className="text-dark/80 text-base mb-2">Think about why buy domain name in the first place</p>
    <h2 className="text-dark text-lg font-bold mb-4">$6.99</h2>
    <a href="#" className="text-[#9824f4] font-semibold inline-flex items-center gap-2 hover:underline">
      Get Offer <FaArrowRightLong className="text-[#9824f4]" />
    </a>
  </div>

  {/* .net */}
  <div className="w-full sm:w-[45%] lg:w-[22%]  border border-[#9824f4] rounded-2xl p-6">
    <img className='w-[100px] mb-8 mt-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaC2fVJST-pSa-keMNnvLlk2es5h17OqNdyWwvRCJTUaFEyTiRwwS7IO-uJh6tDeScTfE&usqp=CAU" alt=".net"/>
    <p className="text-dark/80 text-base mb-2">Think about why buy domain name in the first place</p>
    <h2 className="text-dark text-lg font-bold mb-4">$6.99</h2>
    <a href="#" className="text-[#9824f4] font-semibold inline-flex items-center gap-2 hover:underline">
      Get Offer <FaArrowRightLong className="text-[#9824f4]" />
    </a>
  </div>
</div>



  <div className="flex flex-wrap gap-13 mt-16 mb-16 md:mx-20 mx-8">
  {/* .online */}
  <div className="w-full h-[300px] sm:w-[45%] lg:w-[22%] border border-[#9824f4] rounded-2xl p-6">
    <img className='w-[100px] mb-6 mt-3' src="https://netshop.impress.co.jp/sites/default/files/styles/amp_metadata_content_image_min_1600px_wide/public/images/article/2016/pepabo1609/pepabo1609_ogp.png?itok=pSyD3_fl" alt=".online"/>
    <p className="text-dark/80 text-base mb-4">Think about why buy domain name in the first place</p>
    <h2 className="text-dark text-lg font-bold mb-4">$6.99</h2>
    <a href="#" className="text-[#9824f4] font-semibold inline-flex items-center gap-2 hover:underline">
      Get Offer <FaArrowRightLong className="text-[#9824f4]" />
    </a>
  </div>

  {/* .com */}
  <div className="w-full sm:w-[45%] lg:w-[22%]  border border-[#9824f4] rounded-2xl p-6">
    <img className='w-[80px] mb-8 mt-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/1280px-.xyz_logo.svg.png" alt=".com"/>
    <p className="text-dark/80 text-base mb-3">Think about why buy domain name in the first place</p>
    <h2 className="text-dark text-lg font-bold mb-4">$6.99</h2>
    <a href="#" className="text-[#9824f4] font-semibold inline-flex items-center gap-2 hover:underline">
      Get Offer <FaArrowRightLong className="text-[#9824f4]" />
    </a>
  </div>

  {/* .org */}
  <div className="w-full sm:w-[45%] lg:w-[22%]  border border-[#9824f4] rounded-2xl p-6">
    <img className='w-[80px] mb-8 mt-5' src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Pro_logo.svg" alt=".org"/>
    <p className="text-dark/80 text-base mb-2">Think about why buy domain name in the first place</p>
    <h2 className="text-dark text-lg font-bold mb-4">$6.99</h2>
    <a href="#" className="text-[#9824f4] font-semibold inline-flex items-center gap-2 hover:underline">
      Get Offer <FaArrowRightLong className="text-[#9824f4]" />
    </a>
  </div>

  {/* .net */}
  <div className="w-full sm:w-[45%] lg:w-[22%]  border border-[#9824f4] rounded-2xl p-6">
    <img className='w-[80px] mb-8 mt-6' src="https://upload.wikimedia.org/wikipedia/commons/e/e7/.CLUB_English_logo.png" alt=".net"/>
    <p className="text-dark/80 text-base mb-2">Think about why buy domain name in the first place</p>
    <h2 className="text-dark text-lg font-bold mb-4">$6.99</h2>
    <a href="#" className="text-[#9824f4] font-semibold inline-flex items-center gap-2 hover:underline">
      Get Offer <FaArrowRightLong className="text-[#9824f4]" />
    </a>
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

export default Domain
