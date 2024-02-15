import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { FaUser, FaHeart, FaShoppingCart  } from "react-icons/fa"
import ProductsCarousel from "./ProductsCarousel";

export default function UserIcons({ countValue }) {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0)
  const isScreenMd = window.innerWidth >= 768;
  
  const addItemCart = () => {
    setCartCount(countValue)
  }

  return(
    <>
      <NavLink 
      to='/login'
      className={` ${location.pathname === '/login' ? 'isActive' : ''} text-[10px] font-semibold hover:text-sky-500 rounded-lg p-1 duration-300`}>
        <p className="flex flex-col items-center gap-y-2">
          <FaUser className="md:text-lg text-2xl"></FaUser>
          <span className="hidden md:inline-block">
            INGRESAR
          </span>
        </p>
      </NavLink>

      <NavLink 
      to='/favoritos'
      className={` ${location.pathname === '/favoritos' ? 'isActive' : ''} text-[10px] font-bold hover:text-sky-500 rounded-lg p-1 duration-300`} 
      >
        <p className="flex flex-col items-center gap-y-2">
          <FaHeart className="md:text-lg text-2xl"></FaHeart>
          <span className="hidden md:inline-block">
            FAVORITOS
          </span>
        </p>
      </NavLink>

      <NavLink 
      to='/carrito'
      onClick={addItemCart}
      className={` ${location.pathname === '/carrito' ? 'isActive' : ''} text-[10px] group font-bold hover:text-sky-500 rounded-lg p-1 duration-300`}>
        <p className="group flex flex-col relative items-center gap-y-2">
          <span className=
            {
              isScreenMd 
                ? 'absolute text-center bottom-[28px] right-[0px] w-[20px] h-[20px] border-2 border-black rounded-full group-hover:border-sky-500 duration-300'
                : 'absolute text-center bottom-[12px] right-[-10px] w-[20px] h-[20px] border-2 border-black rounded-full group-hover:border-sky-500 duration-300'
            }>
            {cartCount}
          </span>
          <FaShoppingCart className="md:text-lg text-2xl"></FaShoppingCart>
          <span className="hidden md:inline-block">
            CARRITO
          </span>
        </p>
      </NavLink>
    </>
  )
}