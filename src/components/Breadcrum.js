import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='m-8'>
      Home <ChevronRightIcon/> Shop <ChevronRightIcon/> {product.category} <ChevronRightIcon/> {product.name}
    </div>
  )
}

export default Breadcrum
