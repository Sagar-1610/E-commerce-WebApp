import React from 'react'
import data from './data/data';
import Item from './Item';


const Popular = () => {
  return (
    <div className='h-screen xxs:pb-8 xxs:h-full xxs:w-full w-screen flex flex-col items-center  text-center hero'>
      <h1 className='text-2xl font-semibold underline'>Popular in Womens</h1>
      <div className=''>
      <div className='flex xxs:flex-col gap-10 mt-6'>
        {
            data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>

            })
        }
      </div>
      </div>
    </div>
  )
}

export default Popular
