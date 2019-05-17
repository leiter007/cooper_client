import React from 'react';
import {Form, Dropdown, Divider} from 'semantic-ui-react'

const InputFields = (props) => {
  const genderOptions = [
    {text: "Female", value: "female"},
    {text: "Male", value: "male"}
  ]
  return (
    <>
      <Dropdown
        selection
        id="gender" 
        defaultValue={genderOptions[0].value}
        options={genderOptions}
        onChange={(e,{value}) => props.handleGenderChange(value)}
      />
      <Divider horizontal>Fill in distance you ran in 12 minutes, and your age</Divider>
      <Form type="medium">
        <Form.Input
          fluid
          id="distance"
          placeholder="Distance"
          onChange={props.inputChangeHandler}
        />

        <Form.Input
          fluid
          id="age"
          placeholder="Age"
          onChange={props.inputChangeHandler}
        />
		  </Form>
    </>
  )
}

export default InputFields;