import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <NavLink 
      className={({isActive}) => isActive ? 'activo' : null} 
      to={'/'}>Home</NavLink>

      <NavLink 
      className={({isActive}) => isActive ? 'activo' : null} 
      to={'/Componentes/atanagildo'}>Atanagildo</NavLink>

      <NavLink 
      className={({isActive}) => isActive ? 'activo' : null} 
      to={'/Componentes/ataulfo'}>Ataulfo</NavLink>

      <NavLink 
      className={({isActive}) => isActive ? 'activo' : null} 
      to={'/Componentes/ervigio'}>Ervigio</NavLink>

      <NavLink 
      className={({isActive}) => isActive ? 'activo' : null} 
      to={'/Componentes/leovigildo'}>Leovigildo</NavLink>

      <NavLink 
      className={({isActive}) => isActive ? 'activo' : null} 
      to={'/Componentes/recesvinto'}>Recesvinto</NavLink>

      <NavLink 
      className={({isActive}) => isActive ? 'activo' : null} 
      to={'/Componentes/sisebuto'}>Sisebuto</NavLink>
    </div>
  )
}