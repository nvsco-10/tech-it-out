import React from 'react'

export default function Signout() {

  const  logout =() => {
        localStorage.clear();
        window.location.href = '/';
    }
  return (
    <div>
    <button  onClick={logout} className="navbar-item has-text-black has-text-weight-semibold" >Sign Out</button>
   </div>
  )
}
