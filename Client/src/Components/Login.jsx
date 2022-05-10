import React, {useState} from 'react'
// import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const eye = <FontAwesomeIcon icon={faEye} />;

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    
    <div className="App">
      <form action="">

        <input
          name="username"
          type="text"
          placeholder="Username"
          />
        <div className="pass-wrapper">
          <input
            placeholder="Password"
            name="password"
            type={passwordShown ? "text" : "password"}
            />
          <span onClick={togglePasswordVisiblity}>{eye}</span>
        </div>
          <button type="submit">
            Submit
          </button>
      </form>
      <span><Link to="/signup">Sign Up</Link></span>
    </div>
  );
  
};