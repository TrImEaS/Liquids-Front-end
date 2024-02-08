import { NavLink, useLocation } from "react-router-dom"
import { FaUser, FaHeart, FaShoppingCart  } from "react-icons/fa"

export default function UserIcons() {
  const location = useLocation();
  
  return(
    <>
      <NavLink 
        to='/'
        className={` ${location.pathname === '/' ? 'isActive' : ''} text-[10px] font-semibold hover:text-sky-500 duration-300`} 
      >
        <p className="flex flex-col items-center gap-y-2">
          <FaUser className="text-lg"></FaUser>
          <span>INGRESAR</span>
        </p>
      </NavLink>
      <NavLink 
        to='/search'
        className={` ${location.pathname === '/' ? 'isActive' : ''} text-[10px] font-bold hover:text-sky-500 duration-300`} 
      >
        <p className="flex flex-col items-center gap-y-2">
          <FaHeart className="text-lg"></FaHeart>
          <span>FAVORITOS</span>
        </p>
      </NavLink>
      <NavLink 
        to='/search'
        className={` ${location.pathname === '/' ? 'isActive' : ''} text-[10px] font-bold hover:text-sky-500 duration-300`} 
      >
        <p className="flex flex-col items-center gap-y-2">
          <FaShoppingCart className="text-lg"></FaShoppingCart>
          <span>CARRITO</span>
        </p>
      </NavLink>
    </>
  )
}