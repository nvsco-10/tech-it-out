import React from 'react'
import { Link } from "react-router-dom";
import Signout from './Signout';



export default function Navbar() {
  return (
    <div className="navbar-start">
      <nav className="navbar-menu">
       <a className="navbar-item"><Link to="/resources">Resources</Link></a>
       <a className="navbar-item"><Link to="/community">Community</Link></a>
       <a className="navbar-item"><Link to="/">Home</Link></a>
       </nav>
       <div>
        <Signout/>
       </div>
    </div>
  )
}
