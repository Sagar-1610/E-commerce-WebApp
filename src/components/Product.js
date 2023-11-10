import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from './Breadcrum';
import ProductDisplay from './ProductDisplay';
import Description from './Description';
import RelatedProducts from './RelatedProducts';

const Product = (props) => {
  const {allProduct} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProduct.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
