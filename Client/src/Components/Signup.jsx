import React, {useState} from 'react'
// import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => {
  //   console.log(data);
  return (
    
    <div className="App">
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
      <div>
          <button>Sign Up!</button>
     </div>
    </div>
  );
  
};