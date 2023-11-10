import React, { createContext, useState } from 'react';
import allProduct from './data/Product';


export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
    let cart = {};
    for(let i=0; i<allProduct.length+1;i++){
        cart[i]=0;
    }
    return cart;
}


const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId)=>{
        setCartItems((previous)=>({...previous,[itemId]:previous[itemId]+1}))
       
    }
    const removeToCart = (itemId)=>{
        setCartItems((previous)=>({...previous,[itemId]:previous[itemId]-1}))
        
    }

    const getTotalAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = allProduct.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems  =()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }


    const contextValue = {getTotalCartItems, getTotalAmount,allProduct,cartItems,addToCart,removeToCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;