import React, { useState } from "react";
import "./style.css";
import { NavLink, Link } from "react-router-dom";
import { style } from "glamor";
import {introduction} from "../../portfolio";

function Header(props) {
  const theme = props.theme;
  
  return (
      <div>
        <header className="header">
          <NavLink tag={Link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
            {introduction.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" >
            <li>
              <NavLink
                className="menui"
                to="/"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {"<Home/>"}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menui"
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {"<Education/>"}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menui"
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {"<Experience/>"}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menui"
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {"<Projects/>"}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menui"
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {"<Contact And CV/>"}
              </NavLink>
            </li>
            {/* <button {...styles} onClick={changeTheme}>
              {icon}
            </button> */}
          </ul>
        </header>
      </div>
  );
}

export default Header;