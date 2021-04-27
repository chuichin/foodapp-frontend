import React from 'react';
import classes from './UpdateTextInput.module.css';

const UpdateTextInput = ({ label, input, inputType }) => {
  return (
    <div className={classes.inputContainer}>
      <input type={inputType} className={classes.categoryInput} {...input} />
      <label className={classes.categoryLabel}>{label}</label>
    </div>
  );
};

export default UpdateTextInput;
