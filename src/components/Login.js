import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen hero1 flex items-center justify-center'>
      <div className='w-2/5 h-3/4 bg-white xxs:w-4/5'>
        <div className='ml-8 mt-8'>
          <div>
            <p className='font-semibold pb-4 text-xl'>Sign up</p>
          </div>
          <div>
            <input type="text" placeholder='Enter Name ' className='border-x border-y border-black mb-8 rounded-base p-2 w-5/6'/>
            <br />
            <input type="text" placeholder='Enter Email' className='border-x border-y border-black mb-8 rounded-base p-2 w-5/6' />
            <br />
            <input type="text" placeholder='Enter Password' className='border-x border-y border-black mb-8 rounded-base p-2 w-5/6' />
            <button className='w-5/6 bg-red-500 p-2 text-sm cursor-pointer hover:bg-red-600 text-white rounded-sm'>Continue</button>
            <p className='text-sm p-2'>Already have an account? <span className='text-red-500'>Login Here</span></p>
            <input type="checkbox" />
            <span className='text-sm xxs:text-xs pl-1'>By continuing, I agree to the terms of use privacy and policy.</span>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Login
