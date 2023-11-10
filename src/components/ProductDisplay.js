import React, { useContext } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { ShopContext } from './ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} =useContext(ShopContext)

  return (
    <div className='h-screen w-screen xxs:w-full hero xxs:flex-col xxs:h-full flex'>
      <div className=' basis-4/6 flex  m-4'>
        <div className=''>
            <img src={product.image} alt="" className='w-24 h-32 m-2 xxs:w-16 xxs:h-20' />
            <img src={product.image} alt="" className='w-24 h-32 m-2 xxs:w-16 xxs:h-20' />
            <img src={product.image} alt="" className='w-24 h-32 m-2 xxs:w-16 xxs:h-20' />
            <img src={product.image} alt="" className='w-24 h-32 m-2 xxs:w-16 xxs:h-20' />
        </div>
        <div className='ml-2 w-full h-full xxs:mr-3'>
        <img src={product.image} alt="" className='m-2 ml-4 w-96 h-100 xxs:w-72 xxs:h-82' />
        </div>
      </div>
      <div className='left'>
        <div className='m-6'>
          <h1 className='text-2xl'>{product.name}</h1>
          <div className='pt-4 text-red-500'>
            <StarIcon fontSize='smal' />
            <StarIcon fontSize='smal'/>
            <StarIcon fontSize='smal'/>
            <StarIcon fontSize='smal'/>
            <StarHalfIcon fontSize='smal' />
            <span className='text-sm text-black'>(111)</span>
           </div>
           <div className='flex pt-4'>
             <p className='line-through text-xl font-semibold'>${product.old_price}</p>
             <p className='ml-4 text-xl text-red-500 font-semibold'>${product.new_price}</p>
           </div>
           <div className=' mt-6'>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe recusandae quisquam neque ipsa animi  assumenda deleniti laboriosam possimus, nesciunt odit voluptatum veritatis </p>
           </div>
           <div className='mt-6'>
            <p className='pb-6'>Select size</p>
            <ul className='flex '>
                <li className='border-2 text-sm rounded-xl border-black xxs:px-3 xxs:py-1 px-7 py-2  '>S</li>
                <li className='border-2 text-sm rounded-xl border-black xxs:px-3 xxs:py-1 px-7 py-2  '>M</li>
                <li className='border-2 text-sm rounded-xl border-black xxs:px-3 xxs:py-1 px-7 py-2  '>L</li>
                <li className='border-2 text-sm rounded-xl border-black xxs:px-3 xxs:py-1 px-7 py-2  '>XL</li>
                <li className='border-2 text-sm rounded-xl border-black xxs:px-3 xxs:py-1 px-7 py-2  '>XXL</li>
            </ul>
           </div>
           <div className='mt-2'>
            <button onClick={()=>{addToCart(product.id)}} className='rounded-base text-white hover:bg-red-600 bg-red-500 px-8 py-2 '>Add to cart</button>
           </div>
           <div className='mt-2'>
            <p className='font-semibold text-sm '>Category:{product.category}</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
