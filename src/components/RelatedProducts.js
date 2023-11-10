import React from 'react'
import data from '../components/data/data';
import Item from './Item'

const RelatedProducts = () => {
  return (
    <div>
    <div className=" hero w-screen flex flex-col items-center  text-center">
      <h1 className="text-2xl font-semibold">Related Products</h1>
      <div className="">
        <div className="flex h-full pb-32 gap-10 mt-6 grid xxs:grid-flow-row grid-rows-0 grid-flow-col">
          {data.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default RelatedProducts
