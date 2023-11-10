import React from 'react'
import hero1 from '../img/hero1.png';

const Hero = () => {
  return (
    <div className='h-screen w-screen xxs:w-full flex hero xxs:h-full pb-8'>
      <div className=' w-full'>
        <div className='w-full flex justify-center items-center h-full'>
            <div className=' w-2/3 h-3/5 xxs:p-2  xxs:w-full'>
            <p className='p-3 xxs:p-1 xxs:text-xs font-semibold'>NEW ARRIVALS ONLY</p>
            <p className='text-5xl xxs:text-2xl font-semibold xxs:p-1 p-3 '>new <br />collections <br />for everyone</p>
            <div className='p-3  xxs:w-full'>
                <button className='bg-red-500 xxs:px-8 xxs:text-xs xxs:py-1 hover:bg-red-600 py-2 px-6 rounded-xl text-white'>Latest Collection</button>
            </div>
            </div>
        </div>

      </div>
      <div className=' w-full'>
      <div className='w-full flex  items-center  h-full'>
            <div className=''>
                <img src={hero1} alt="" className=' ml-12 xxs:ml-1 xxs:w-56 xxs:h-60' />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Hero