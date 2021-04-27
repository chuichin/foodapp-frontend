import React from 'react';
import classes from './TextInput.module.css';

const TextInput = ({ label, inputType, input, meta }) => {
  const error = meta.error && meta.touched ? classes.error : null;

  return (
    <>
      <div className={`${classes.inputContainer} ${error}`}>
        <label className={classes.label}>{label}</label>
        <input
          type={inputType}
          className={classes.inputField}
          {...input}
          autoComplete="off"
        />
      </div>
      {meta.error && meta.touched ? (
        <div className={classes.errorMsg}>{meta.error}</div>
      ) : (
        ''
      )}
    </>
  );
};

export default TextInput;
