import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext =createContext();

const ShopContextProvider = (props)=>{
    const currency = '$';
    const delivery_fee=10;
    const backendUrl=https://e-commerce-if5p.onrender.com
    const [cartItems,setCartItems]=useState({});
    const [token,setToken]=useState('');
    const navigate=useNavigate();

    const addToCart =async (itemId,size)=>{

        if(!size){
            toast.error('Select product Size');
            return;
        }

        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }else{
                cartData[itemId][size]=1;
            }
        }else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData);
    }
    
  const getCartCount=()=>{
    let totalCount=0;
    for(const items in cartItems){
        for(const item in cartItems[items]){
            try {
                if(cartItems[items][item]>0){
                    totalCount +=cartItems[items][item];

                }
                
            }catch (error) {
    console.error("Error while counting cart items:", error);
  }
        }
    }
    return totalCount
  }

  const updateQuantity =async(itemId,size,quantity)=>{
    let cartData =structuredClone(cartItems);
    cartData[itemId][size]=quantity;
    setCartItems(cartData);
  }
useEffect(()=>{
    if(!token && localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
    }
},[])
    const value={
    products,currency,delivery_fee,cartItems,addToCart,getCartCount,updateQuantity,backendUrl,setToken,token,navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
