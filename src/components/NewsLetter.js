import React from 'react'

const NewsLetter = () => {
  return (
    <div className='h-full w-screen xxs:w-full flex justify-center items-center'>
        <div className='w-3/4 h-3/4 hero pb-32'>
            <p className='text-center pt-12 text-3xl xxs:text-2xl font-semibold'>Get Exclusive Offers On Your Email</p>
            <p className='text-center p-4 text-sm xxs:text-xs'>Subscribe to our Newsletter and Stay Updated</p>
            <div className='flex justify-center'>
                <input type="text" placeholder='Enter your Email' className='border-x border-y border-black hero w-2/5 p-2 xxs:p-1 xxs:rounded-xl rounded-2xl'/>
                <button className='bg-black text-white rounded-3xl xxs:rounded-xl px-4 '>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
