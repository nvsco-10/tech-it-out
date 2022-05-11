import React from 'react'
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div className="navbar-start">
      <nav class="navbar-menu">

       <a class="navbar-item"><Link to="/resources">Resources</Link></a>
       <a class="navbar-item"><Link to="/community">Community</Link></a>
       <a class="navbar-item"><Link to="/">Home</Link></a>
       <a class="navbar-item"><Link to="/profile">Profile</Link></a>
      </nav>
    </div>
  )
}
