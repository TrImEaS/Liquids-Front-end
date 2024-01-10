import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <NavLink to={'/atanagildo'}>Atanagildo</NavLink>
      <NavLink to={'/ataulfo'}>Ataulfo</NavLink>
      <NavLink to={'/ervigio'}>Ervigio</NavLink>
      <NavLink to={'/leovigildo'}>Leovigildo</NavLink>
      <NavLink to={'/recesvinto'}>Recesvinto</NavLink>
      <NavLink to={'/sisebuto'}>Sisebuto</NavLink>
    </div>
  )
}