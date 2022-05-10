import React, {useState} from 'react'
import Login from './components/Login';
import SignUp from './components/SignUp';
import './css/app.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
      </Router>
    </div>
  )
}
