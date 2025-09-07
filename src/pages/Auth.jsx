import React, { use } from 'react'
import { FaServer } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin,setIsLogin] = React.useState(true);
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-xl mx-auto p-12 shadow'>
        <div onClick={()=>navigate('/')} className='flex items-center justify-center gap-2 mb-12 mx-auto cursor-pointer'>
          <FaServer className='text-[#9824f4] text-2xl'/>
          <span className='text-3xl text-dark font-bold'>Elithosting</span>
        </div>
        <h1 className='text-xl text-dark font-bold text-center'>{isLogin ? "Sign In" : "Sign Up"}</h1>

        {/* Full name Field */}
        { 
        !isLogin &&
         <div className='mb-4'>
          <label className='block mb-2 text-dark/80'>Full Name</label>
          <input className='w-full  h-10 px-6 border border-[#9824f4] rounded outline-none placeholder:text-sm placeholder:text-dark/50' 
          placeholder='Enter Your Name' type="text" />
        </div>
        }



        {/* Email Field */}
        <div className='mb-4'>
          <label className='block mb-2 text-dark/80'>Email Address</label>
          <input className='w-full h-10 px-6 border border-[#9824f4] rounded outline-none placeholder:text-sm placeholder:text-dark/50' 
          placeholder='Enter Email' type="email" />
        </div>

        {/* Password Field */}
        <div className='mb-4'>
          <label className='block mb-2 text-dark/80'>Password</label>
          <input className='w-full h-10 px-6 border border-[#9824f4] rounded outline-none placeholder:text-sm placeholder:text-dark/50' 
          placeholder='Enter Password' type="email" />
        </div>

          {
          !isLogin && 
               <div className='mb-4'>
          <label className='block mb-2 text-dark/80'>Confirm Password</label>
          <input className='w-full  h-10 px-6 border border-[#9824f4] rounded outline-none placeholder:text-sm placeholder:text-dark/50' 
          placeholder='Enter Confirm Password' type="email" />
        </div>
        }



        {/* Forget and Remember field */}
        { isLogin &&
        <div className='mb-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <input className='w-4 h- h-10 rounded' type="checkbox"/>
              <span>Remember me</span>
          </div>
          <a href="#" className='text-[#9824f4] hover:underline font-semibold'>Forget Password</a>
        </div>
        }

        {/* Login button */}
        <button className='w-full bg-[#9824f4] text-white font-semibold px-6 py-2.5 rounded cursor-pointer'>Login</button>
        <p className='text-dark font-semibold text-center mt-2'>{isLogin ? "Have no account yet? " : "You Already have an account? "} 
        <span onClick={()=> setIsLogin (!isLogin)} className='text-[#9824f4] font-bold hover:underline cursor-pointer'>{isLogin ? "Sigh up" : "Login"}</span>
        </p>

      </div>
    </div>
  )
}

export default Auth
