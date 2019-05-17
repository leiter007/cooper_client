import React from 'react';
import { Button } from 'semantic-ui-react'

const LoginForm = (props) => {
  return (
    <form id="login-form">
      <div>
        <label>Email</label>
        <input id="email" onChange={props.inputChangeHandler}></input>
      </div>

      <div>
        <label>Password</label>
        <input id="password" onChange={props.inputChangeHandler}></input>
      </div>
      <Button compact color="teal" onClick={(e) => props.loginHandler(e)} id="submit">Submit</Button>
    </form>
  )
}

export default LoginForm;