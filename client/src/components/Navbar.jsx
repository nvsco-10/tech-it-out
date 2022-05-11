import React from 'react'
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div>
       <a class="navbar-item"><Link to="/resources">Resources</Link></a>
       <a class="navbar-item"><Link to="/community">Community</Link></a>
       <a class="navbar-item"><Link to="/">Home</Link></a>
    </div>
  )
}
