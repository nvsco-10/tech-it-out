import React from 'react'

export default function Signout() {

  const  logout =() => {
        localStorage.clear();
        window.location.href = '/';
    }
  return (
    <div>
    <a  href="#" onClick={logout} className="navbar-item has-text-right">Sign Out</a>
   </div>
  )
}
