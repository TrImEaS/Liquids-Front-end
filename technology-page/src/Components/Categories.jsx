import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Categories () {
  const location = useLocation();
  const getPath = (path) => {
    location.pathname === path ? 'isActive' : ''
  }
  const categories = [
    'Televisores',
    'Heladeras',
    'Lavarropas',
    'Aires',
    'Electrodomesticos',
    'Celulares',
    'Outlet'
  ]

  return(
    <ul className="flex gap-8">
      {categories.map(categorie => (
        <li key={categorie}>
          <NavLink 
            to={`/search/${categorie}`}
            className={`${getPath(`/search/${categorie}`)} hover:text-sky-200 duration-300`}>
            {categorie}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}