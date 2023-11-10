import React from 'react'
import hero from '../img/hero.png';

const Offers = () => {
  return (
    <div className='h-screen xxs:h-full xxs:pb-8 w-screen xxs:w-full flex justify-center items-center'>
        <div className='h-3/4 w-3/4 hero flex xxs:flex-col'>
            <div className='pt-16 pl-16'>
                <p className='text-4xl xxs:text-2xl p-2 font-semibold '>Exclusive <br />Offers for you</p>
                <p className='p-2 font-semibold xxs:text-xs'>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='p-2 bg-red-500 text-white hover:bg-red-600 rounded-xl px-6 py-1 ml-2 '>Check now</button>
            </div>
            <div>
                <img src={hero} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Offers
