import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Card, CardContent, Divider, CardActions, Button } from '@material-ui/core';
import { FormContext } from './context';
import * as R from 'ramda';

export default ({ onClose, onSave, onChange, initialState, children }) => {
  
  const newState = {...initialState};
  delete newState.__typename;
  const [formFields, setFormFields] = useState(newState);
  
  const getFormField = (name, defaultValue = null) => {
    const path = name.split('.');

    if (R.hasPath(path, formFields)) return R.path(path, formFields);

    if (!defaultValue) return;

    const newFormFields = R.assocPath(path, defaultValue, formFields);
    setFormFields(newFormFields);

    return defaultValue;
  };

  const setFormField = (name, value) => {
    const newFormFields = R.assocPath(name.split('.'), value, formFields);
    setFormFields(newFormFields);
    onChange && onChange(newFormFields);
  };

  const save = () => onSave(formFields);

  return (
    <FormContext.Provider value={{ getFormField, setFormField }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Card style={{ overflow: 'visible' }}>
          <CardContent>
            {children}
          </CardContent>

          <Divider />

          <CardActions style={{ justifyContent: 'flex-start' }}>
            <Button variant="contained" color="primary" onClick={save}>Salvar</Button>
          </CardActions>
        </Card>
      </MuiPickersUtilsProvider>
    </FormContext.Provider>
  );
}