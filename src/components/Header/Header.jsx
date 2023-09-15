import React from 'react'
import logo from "../../logo.png"
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"
const Header = () => {
    console.log(logo)
  return (
    <nav className="header">
    <img src={logo} alt="logo" />
    <div>
    <Link to="/tvshows"> TV Shows </Link>
    <Link to="/tvshows"> Movies </Link>
    <Link to="/tvshows"> Recently Added </Link>
    <Link to="/tvshows"> My List </Link>
    
    </div>
    <ImSearch />
    </nav>
  )
}
// 05cacc5c3444a09f5e231c33ce2478e1
export default Header