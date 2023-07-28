import React from "react";
import "../styles/header.css";
import logo from "../logo-modified.png"
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
const Header=()=>{
    return(
        <>
        
        <div className="head">
        <NavLink to="/Chocobean-Menu"><img src={logo} alt="..."  className="logo"/></NavLink>
            {/* <h1 className="heading">Chocobean</h1>
            <h3 className="subhead">By Divya</h3> */}
          <Nav/>  
        </div>
        
        </>
    )
}

export default Header;