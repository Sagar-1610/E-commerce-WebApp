import React from 'react'
import { Link } from 'react-router-dom'



const Item = (props) => {
  return (
    <div>
      <div className=''>
        <div className=' w-full h-full'>
           <div className='overflow-hidden'>
           <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" className='w-64 transition duration-700 hover:scale-110 ease-out h-72 ' /></Link>
           </div>
            <p>{props.name}</p>
            <div className='flex justify-center gap-6'>
               <div className='line-through'>${props.old_price}</div>
                <div className='text-red-500'>${props.new_price}</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item
