import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Button, Notification } from "react-bulma-components";
import { createUser } from "../utils/API";
import Auth from "../utils/auth";

export default function SignUp() {
  const eye = <FontAwesomeIcon icon={faEye} />;

  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="Login">
        <div className="login_form">
          <h1>Sign Up For Free!</h1>

          <form onSubmit={handleFormSubmit}>
            {showAlert && (
              // Bulma component
              <Notification color="danger">
                Sign Up failed!
                <Button remove onClick={() => setShowAlert(false)}>
                  x
                </Button>
              </Notification>
            )}

            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleInputChange}
              value={userFormData.email}
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
              disabled={
                !(
                  userFormData.username &&
                  userFormData.email &&
                  userFormData.password
                )
              }
            >
              Submit
            </button>
          </form>
        <div className="span-border">
          <span className="span-link">
            <Link to="/login">Back To Login</Link>
          </span>
        </div>
        </div>

      </div>
    </>
  );
}
