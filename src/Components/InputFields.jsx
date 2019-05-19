import React from 'react';
import { Form, Dropdown, Divider, Label, Button } from 'semantic-ui-react'

const InputFields = (props) => {
  const genderOptions = [
    { text: "Female", value: "female" },
    { text: "Male", value: "male" }
  ]
  return (
    <>
      <Form type="medium" id="calculationForm">
        <Form.Field inline>
          <Dropdown
            selection
            id="gender"
            defaultValue={genderOptions[0].value}
            options={genderOptions}
            onChange={(e, { value }) => props.handleGenderChange(value)}
          />
          <Label pointing='left'>Choose your gender</Label>
        </Form.Field>

        <Divider horizontal>Fill in distance you ran in 12 minutes and your age</Divider>

        <Form.Input
          fluid
          id="distance"
          placeholder="Distance (metres)"
          onChange={props.inputChangeHandler}
        />

        <Form.Input
          fluid
          id="age"
          placeholder="Age (years)"
          onChange={props.inputChangeHandler}
        />
      </Form>
      <br />
      <Button compact color="teal" id="sign-up" onClick={(e) => props.resetFormState(e)}>Reset Numeric Fields</Button>
    </>
  )
}

export default InputFields;
