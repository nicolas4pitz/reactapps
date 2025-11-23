
import { Menulist } from "./Menulist";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import React from "react";

import "./NavBar.css"

const NavBar = () => {

  const [clicked, setClicked] = useState(false);

  const menuList = Menulist.map( ({url, title}, index) => {
    return (
      <li key={index}><NavLink to={url} >{title}</NavLink></li>
    )
  })

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <nav>
        <div className="logo">
          VPN <font>Lab</font>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          {menuList}
        </ul>
      </nav>
    </>
  )

}

export default NavBar