import React, {useState} from 'react'
// import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from './Header';

const eye = <FontAwesomeIcon icon={faEye} />;

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    
    <div className="login_form">
      <div><Header></Header></div>
      <form action="">

        <input
          name="username"
          type="text"
          placeholder="Username/Email"
          required
          />
        <div className="pass-wrapper">
          <input
            placeholder="Password"
            name="password"
            type={passwordShown ? "text" : "password"}
            required
            />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
          <button type="submit">
            Submit
          </button>
      </form>
      <div className='span-border'>
        <span className='span-link'><Link to="/signup">Sign Up</Link></span>
      </div>
    </div>
  );
  
};