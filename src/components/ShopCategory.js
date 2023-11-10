import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import Item from "./Item";


const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);
  return (
    <div className="h-full hero">
      <div>
        <img src={props.banner} alt="" />
      </div>
      <div className="flex mt-4 justify-between w-full ">
        <p className="ml-20 text-sm">showing 1-12 out of 36 products</p>
        <p className="mr-12 xxs:hidden border-2 border-black px-4 py-1 rounded-xl text-sm">
          sort by v
        </p>
      </div>
      <div className=" hero w-screen flex flex-col items-center  text-center">
        <div className="flex h-full pb-32 gap-10 mt-8 xxs:grid-flow-row grid grid-rows-3 grid-flow-col">
          {allProduct.map((item, i) => {
            if (props.category === item.category) {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="flex justify-center w-full pb-8">
        <p className="border-black px-4 py-1 rounded-xl border-2 ">Explore more</p>
      </div>
    </div>
  );
};

export default ShopCategory;
