import { NavLink, useLocation } from "react-router-dom"

export default function NavLinks({ style }) {
  const location = useLocation();

  const isNavLinkActive = (path) => { return location.pathname === path }
  return(
    <>
      <NavLink 
        to='/'
        className={` ${location.pathname === '/' ? 'isActive' : ''} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`} 
        >Home
      </NavLink>

      <NavLink 
         to='/editar'
         className={` ${location.pathname === '/editar' ? 'isActive' : ''} ${style} 
         dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`} 
         >Editar
      </NavLink>

      <NavLink 
         to='/imprimir'
         className={` ${location.pathname === '/crear' ? 'isActive' : ''} ${style} 
         dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`} 
         >Imprimir Recibos
      </NavLink>

      <NavLink 
         to='/ver'
         className={` ${location.pathname === '/ver' ? 'isActive' : ''} ${style} 
         dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`} 
         >Ver
      </NavLink>

    </>
  )
}