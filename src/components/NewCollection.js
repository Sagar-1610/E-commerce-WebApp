import React from "react";
import new_collection  from "./data/newcollection";
import Item from "./Item";

const NewCollection = () => {
  return (
    <div>
      <div className=" hero w-screen xxs:h-full xxs:pb-4 xxs:w-full flex flex-col items-center  text-center">
        <h1 className="text-2xl font-semibold underline">New Collection</h1>
        <div className="">
          <div className="flex xxs:flex-col xxs:grid-flow-row h-full pb-32 gap-10 mt-6 grid grid-rows-2 grid-flow-col">
            {new_collection.map((item, i) => {
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
  );
};

export default NewCollection;
