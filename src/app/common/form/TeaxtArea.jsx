import React from 'react'
import { Form, Label } from 'semantic-ui-react';

const TeaxtArea = ({
  input,
  rows,
  width, 
  type, 
  placeholder, 
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} rows={rows} type={type} placeholder={placeholder}></textarea>
      {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default TeaxtArea
