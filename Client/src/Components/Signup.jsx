import React from 'react'

export default function SignUp() {
  return (
    <>


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

    </>
  )
}
