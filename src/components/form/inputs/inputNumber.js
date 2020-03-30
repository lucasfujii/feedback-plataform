import React from 'react';
import { FormContext } from '../context';
import { TextField } from '@material-ui/core';

export default ({ name, label, ...props }) => {
  const { defaultValue } = props;

  return (
    <FormContext.Consumer>
      {context => (
        <TextField
          {...props}
          margin="normal"
          id={name}
          label={label}
          placeholder={label}
          type='number'
          value={context.getFormField(name, defaultValue)}
          InputLabelProps={{ shrink: true }}
          onChange={({ target: { value } }) => context.setFormField(name, parseFloat(value))} />
      )}
    </FormContext.Consumer>
  );
}