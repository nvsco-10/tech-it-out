import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from './Header';

import {loginUser} from '../utils/API'
import Auth from '../utils/auth';

export default function Login() {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    
  };
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  }
  
    const handleFormSubmit = async (event) => {
      console.log(userFormData);
      event.preventDefault();
      
      try {
        const response = await loginUser(userFormData);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { token, user } = await response.json();
        console.log(user);
        Auth.login(token);
      } catch (err) {
        console.error(err);
        // setShowAlert(true);
      }
  
      setUserFormData({
        username: '',
        password: '',
      });
  };

  return (
    
    <div className="login_form">
      <div><Header></Header></div>
      <form  onSubmit={handleFormSubmit}>

        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleInputChange}
          value={userFormData.username}
          required
          />
        <div className="pass-wrapper">
          <input
            placeholder="Password"
            name="password"
            type={passwordShown ? "text" : "password"}
            onChange={handleInputChange}
            value={userFormData.password}
            required
            />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
          <button 
          type="submit"
          disabled={!(userFormData.username && userFormData.password)}
          >
            Submit
          </button>
      </form>
      <div className='span-border'>
        <span className='span-link'><Link to="/signup">Sign Up</Link></span>
      </div>
    </div>
  );
  
};