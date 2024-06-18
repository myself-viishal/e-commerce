import React from 'react'
import { NavLink } from "react-router-dom";

function LinksComp({className="" , to="/" , children}) {
  return (
    <li className="h-full group">
      <NavLink
        to={to}
        className={({ isActive }) => `
                ${
                  isActive ? "text-slate-700" : "text-black "
                } h-full min-h-full font-normal text-sm flex items-center hover:text-slate-700 hover:font-light uppercase  `}
      >
        {children}
      </NavLink>
      <div className="h-[1.4px]  ease-in-out bg-black w-0 duration-200 group-hover:w-full"></div>
    </li>
  );
}

export default LinksComp
