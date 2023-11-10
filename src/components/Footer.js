import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='h-full hero  xxs:w-full w-screen '>
        <div className='flex justify-center '>
            <ShoppingBagOutlinedIcon fontSize="large"  sx={{ color:"crimson" }}/>
          <Link to="/"><span className='text-2xl font-semibold text-red-700 underline'> CARTWAVE</span></Link>
        </div>
        <div className='flex justify-center pt-8'>
            <ul className='flex gap-12 xxs:gap-4 xxs:text-xs'>
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About </li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='flex gap-6 pt-8 justify-center pb-8'>
            <InstagramIcon  sx={{fontSize:25}} className='transition duration-700 hover:scale-110 ease-linear'/>
            <PinterestIcon  sx={{fontSize:25}} className='transition duration-700 hover:scale-110 ease-linear'/>
            <WhatsAppIcon sx={{fontSize:25}} className='transition duration-700 hover:scale-110 ease-linear' />
        </div>
        <hr className='border-x border-black'/>
        <div className='flex justify-center pb-8 p-2'>
            <p className='text-xs'>Copyright @ 2023-All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
