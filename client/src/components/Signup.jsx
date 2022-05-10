import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { createUser } from '../utils/API';
import Auth from '../utils/auth';


export default function SignUp() {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
    // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  // const [validated] = useState(false);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };
  return (
    <div className='login_form'>

     <h1>Sign Up For Free!</h1>

  <form onSubmit={handleFormSubmit}>

    <input
      name="email"
      type="text"
      placeholder="Email"
      onChange={handleInputChange}
      value={userFormData.email}
      required
      />
      <br/>
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
      disabled={!(userFormData.username && userFormData.email && userFormData.password)}>
        Submit
      </button>
  </form>
<div className='span-border'>
      <span className='span-link'><Link to="/">Back To Login</Link></span>
    </div>
  </div>
  )
}
