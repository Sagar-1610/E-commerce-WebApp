import React, { useContext, useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext);
  const [menuBar,setMenuBar] = useState(false);
  return (
    <div className='h-full flex xxs:flex-col  xxs:justify-between xs:flex-col xs:bg-green-500 justify-between' >
      <div className='flex p-4'>
        <div className=''>
            <ShoppingBagOutlinedIcon fontSize='large'  sx={{ color:"crimson" }}/>
        </div>
        <div className='text-xl xxs:text-base  xs:text-base text-red-700 underline font-bold'> 
           <Link  to="/"> CARTWAVE</Link>
        </div>
      </div>

      <div className={menuBar ? "w-2/3 xxs:w-full  xs:w-full flex justify-center  " : "xxs:hidden w-2/3 xs:w-full xxs:w-full flex justify-center"}>
        <ul className='flex xxs:flex-col xxs:gap-2  xs:flex-col xs:gap-4   items-center gap-16 '>
            <Link to="/"><li>Shop</li></Link>
            <Link to="/men"> <li>Men</li></Link>
            <Link to="/women"><li>Women</li></Link>
            <Link to="/kids"><li>Kids</li></Link>
        </ul>
      </div>

      <div className='flex  xxs:absolute xxs:top-4 xxs:left-32 xxs:w-3/5 w-1/5 items-center justify-center xxs:gap-0 gap-6'>
        <Link to="/login"><button className='px-5 xxs:ml-12 xxs:px-3 xxs:p-1 font-base border-black text-xs xxs:border-0 border-2 py-2 rounded-2xl '>Login</button></Link>
       
        <Link to="cart"><ShoppingCartOutlinedIcon sx={{fontSize:30}}/></Link>
        <div className='flex justify-center'>
          <div className='h-4 w-4 text-white  xxs:text-xs relative right-8 xxs:right-2 top--8 text-xs rounded-full text-center bg-red-500'>{getTotalCartItems()}</div>
        </div>
        <div className='sm:hidden lg:hidden md:hidden xl:hidden xxs:ml-16 '>
          <MenuIcon onClick={()=>{setMenuBar(!menuBar)}}/>
        </div>
       
      </div>
      
    </div>
  )
}

export default Navbar
