import React from 'react'
// import Header from './Components/Header'
import Login from './Components/Login';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <div>
       <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      
      {/* <Route path="footer" element={<Footer />} /> */}
    </Routes>
      </Router>
    </div>
  )
}
