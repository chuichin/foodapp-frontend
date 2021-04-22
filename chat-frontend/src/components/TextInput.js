import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './TextInput.module.css';

const TextInput = ({ label, type, inputType }) => {
  const dispatch = useDispatch();

  const onInputChange = e => {
    dispatch({ type, payload: e.target.value });
  };

  return (
    <div className={classes.inputContainer}>
      <label className={classes.label}>{label}</label>
      <input
        type={inputType}
        className={classes.inputField}
        autoComplete="off"
        onChange={onInputChange}
      />
    </div>
  );
};

export default TextInput;
