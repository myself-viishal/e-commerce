import React from 'react'
import logo from "../assets/logo-regular.png"
import { NavLink } from 'react-router-dom'

function Logo({classname=""}) {
  return (
    <NavLink to={"/"}>
      <div classname={`${classname}`}>
        <img src={logo} alt="Responsive Image" classname="object-cover" />
      </div>
    </NavLink>
  );
}

export default Logo
