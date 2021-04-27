import React from 'react';
import classes from './RadioBtn.module.css';

const RadioBtn = ({ label, input, value, meta, id }) => {
  const error = meta.error && meta.touched ? classes.error : null;

  return (
    <>
      <div className={`${classes.btnContainer} ${error}`}>
        <input
          type="radio"
          className={classes.btn}
          id={id}
          {...input}
          value={value}
        />
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
};

export default RadioBtn;
