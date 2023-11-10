import React, { useContext } from 'react'
import allProduct from './data/Product'
import { ShopContext } from './ShopContext'
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {
  const { getTotalAmount,allProduct,removeToCart,cartItems} = useContext(ShopContext);
  return (
    <div className='h-screen xxs:h-full xxs:pb-8 xxs:w-full w-screen '>
      <div className='flex items-center flex-col pt-8'>
        <div className='hero w-4/5 xxs:w-full'>
        <div className='text-sm xxs:text-xxxs  flex grid grid-cols-6 gap-10 items-center justify-center pt-6 p-2'>
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='border-2 border-black'/>
        </div>
        {
          allProduct.map((e)=>{
            if(cartItems[e.id]>0){
              return    <div className='hero w-4/5 xxs:w-full'>
              <div className='flex  bg-red- gap-10 grid grid-cols-6 justify-center items-center text-xs p-2'>
                <p><img src={e.image} alt="" className='w-10 h-16' /></p>
                <p className='break-all xxs:text-xxxs'>{e.name}</p>
                <p className=''>${e.new_price}</p>
                <p className='border-x border-y w-8 text-center border-black p-2'>{cartItems[e.id]}</p>
                <p>{e.new_price*cartItems[e.id]}</p>
                <p onClick={()=>{removeToCart(e.id)}} className='cursor-pointer'><DeleteIcon/></p>
              </div>
              <hr  className='border-x border-black'/>
            </div>
            }
            return null;
          })
        }
      </div>

      <div className='flex justify-center'>
        <div className='w-4/5 xxs:w-full xxs:ml-4'>
          <h1 className='pt-4 pb-8 underline font-semibold'>Cart Total</h1>
          <div className='flex justify-center'>
            <div className='left w-1/2'>
              <div className='flex grid grid-col-2 grid-flow-col'>
                <div >
                  <p className='pt-2 pb-2 text-xs'>SubTotal</p>
                  <hr className='border-black border-x' />
                  <p  className='pt-2 pb-2 text-xs'>Processing Fee</p>
                  <hr  className='border-black border-x'/>
                  <p  className='pt-2 pb-2 text-xs'>Total</p>
                  <hr  className='border-black border-x' />
                </div>
                <div>
                  <p  className='pt-2 pb-2 text-xs'>${getTotalAmount()}</p>
                  <p  className='pt-2 pb-2 text-xs'>Free</p>
                  <p  className='pt-2 pb-2 text-xs'>${getTotalAmount()}</p>
                </div>
              </div>
              <button className='bg-red-500 mt-4 p-2 px-4 rounded-sm text-white hover:bg-red-600 text-xs'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='right w-1/2'>
              <p className='text-xs xxs:text-xxxs pb-2'>If you have Promo Code, Enter here</p>
              <hr />
              <input type="text" placeholder='promo code ' className='p-1 xxs:p-0 xxs:w-1/2 font-mono border-black border-x border-y' />
              <button className='px-4 py-1 xxs:py-0 bg-black text-white font-mono'>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Cart
