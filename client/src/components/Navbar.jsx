import React from 'react'
// import Resources from './Resources' 
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div>
       <a className="navbar-item"><Link to="/resources">Resources</Link></a>
       <a className="navbar-item"><Link to="/community">Community</Link></a>
       <a className="navbar-item"><Link to="/">Home</Link></a>
    </div>
  )
}
