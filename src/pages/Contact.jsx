import React, { useState } from 'react';
import { FaServer, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaLocationDot  } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope  } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill required fields: First Name, Email, and Message.");
      return;
    }

    
    alert(`Message Sent!\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
    
   
    console.log("Form Data Submitted:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className='pt-44 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-4'>Get in Touch</h1>
          <p className='text-xl text-dark/80'>Have questions? Our team is here to help you with any inquiries</p>
        </div>

        <div className='flex flex-col md:flex-row items-start gap-6'>
         
          <form onSubmit={handleSubmit} className='w-full md:w-1/2 shadow p-12'>
            <div className='mb-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-dark/80 mb-2 font-semibold'>First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className='w-full px-6 py-2 rounded border outline-none placeholder:text-dark/50 placeholder:text-sm'
                  placeholder='Enter first name'
                  type="text"
                  required/>
              </div>
              <div>
                <label className='block text-dark/80 mb-2 font-semibold'>Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className='w-full px-6 py-2 rounded border outline-none placeholder:text-dark/50 placeholder:text-sm'
                  placeholder='Enter last name'
                  type="text"/>
              </div>
            </div>

            <div className='mb-4'>
              <label className='block text-dark/80 mb-2 font-semibold'>Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='w-full px-6 py-2 rounded border outline-none placeholder:text-dark/50 placeholder:text-sm'
                placeholder='Enter email address'
                type="email"
                required/>
            </div>

            <div className='mb-4'>
              <label className='block text-dark/80 mb-2 font-semibold'>Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className='w-full px-6 py-2 rounded border outline-none placeholder:text-dark/50 placeholder:text-sm'
                placeholder='Enter subject'
                type="text"/>
            </div>

            <div className='mb-4'>
              <label className='block text-dark/80 mb-2 font-semibold'>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className='w-full h-40 px-6 py-2 rounded border outline-none placeholder:text-dark/50 placeholder:text-sm'
                placeholder='Enter message'
                required/>
            </div>

            <button
              type="submit"
              className='w-full text-center bg-[#9824f4] text-white font-semibold rounded cursor-pointer py-3'>
              Send message
            </button>
          </form>

     {/* contact information*/}
        <div className='w-full md:w-1/2'>
        <div className='mb-6 shadow p-12'>
          <h3 className='text-3xl text-dark font-bold'>Contact information</h3>
          <div className='mt-6 flex items-center gap-4'>
            <div className='md:w-13 md:h-12 w-28 h-11 bg-[#9824f4]/30 rounded-full flex items-center justify-center'>
              <FaLocationDot className='text-xl text-[#9824f4] cursor-pointer'/>
            </div>   
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-bold text-dark mb-0'>Address</h1>
              <p className='text-dark/80'>123 cloud street, san Farncisco, CA 94734</p>
              </div> 
          </div>

          <div className='mt-6 flex items-center gap-4'>
            <div className='w-13 h-12 bg-[#9824f4]/30 rounded-full flex items-center justify-center'>
              <FaPhoneAlt  className='text-xl text-[#9824f4] cursor-pointer'/>
            </div>   
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-bold text-dark mb-0'>Phone</h1>
              <p className='text-dark/80'>+91 8905093477</p>
              </div> 
          </div>
          <div className='mt-6 flex items-center gap-4'>
            <div className='w-18 h-12 md:w-12 md:h-12 bg-[#9824f4]/30 rounded-full flex items-center justify-center'>
              <FaEnvelope className='text-xl text-[#9824f4] cursor-pointer'/>
            </div>   
            <div className='flex flex-col gap-1 overflow-hidden'>
              <h1 className='text-lg md:text-xl font-bold text-dark mb-0 md:mr-0'>Email</h1>
              <p className='text-dark/80 break-words text-sm md:text-base'>
                niteshahiniya2.0@gmail.com
              </p>
            </div> 
          </div>

        </div>

          <div className='shadow px-12 pt-12 py-4'>
          <h3 className='text-xl text-dark font-bold mb-6'>Support Hours</h3>
          <ul className='space-y-4'>
            <li className='flex items-center justify-between'>
              <span className='text-dark/80'>Monday-Friday</span>
              <span className='text-dark font-bold'>24/7</span>
            </li>
            <li className='flex items-center justify-between'>
              <span className='text-dark/80'>Saturday</span>
              <span className='text-dark font-bold'>24/7</span>
            </li>
              <li className='flex items-center justify-between'>
              <span className='text-dark/80'>Sunday</span>
              <span className='text-dark font-bold'>24/7</span>
            </li>
          </ul>
        </div>
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

export default Contact
