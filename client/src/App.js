import React  from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Community from './components/Community';
import About from './pages/About';
import Profile from './pages/Profile';
import './css/app.css'

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
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/community" element={<Community />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
      </Router>
    </div>
  )
}
