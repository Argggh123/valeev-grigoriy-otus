import { FormControl, InputLabel, Select } from "@material-ui/core";
import React from 'react';
import classes from './Select.module.css'

const SelectComponent = (props: any) => {
  return (
    <FormControl className={classes.FormControl}>
      <InputLabel htmlFor={'age-simple'}>Age</InputLabel>
      <Select onChange={props.onChange} value={props.value || ''} inputProps={{
        name: 'age',
        id: 'age-simple',
      }}>
        {props.children}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
