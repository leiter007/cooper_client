import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const SignUpForm = (props) => {
  return (

    <Form type="medium" id="sign-up-form">
      <Form.Input
        fluid
        id="email"
        placeholder="Email"
        onChange={props.inputChangeHandler}
      />

      <Form.Input
        fluid
        id="password"
        placeholder="Password"
        onChange={props.inputChangeHandler}
      />

      <Form.Input
        fluid
        id="passwordConfirmation"
        placeholder="Password Confirmation"
        onChange={props.inputChangeHandler}
      />

      <Button compact color="teal" onClick={(e) => props.signUpHandler(e)} id="submit">Submit</Button>
      <Button compact color="teal" onClick={(e) => props.resetHandler(e)}>Reset</Button>

    </Form>
  )
}

export default SignUpForm;
