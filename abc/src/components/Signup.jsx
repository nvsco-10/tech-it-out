import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const eye = <FontAwesomeIcon icon={faEye} />;

export default function SignUp() {

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className='login_form'>

     <h1>Sign Up For Free!</h1>

  <form action="">

    <input
      name="email"
      type="text"
      placeholder="Email"
      required
      />
      <br/>
    <input
      name="newUsername"
      type="text"
      placeholder="Username"
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
      <span className='span-link'><Link to="/">Back To Login</Link></span>
    </div>
  </div>
  )
}
