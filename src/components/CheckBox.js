import React from 'react';
import classes from './CheckBox.module.css';

const CheckBox = ({ id, label, input }) => {
  return (
    <label htmlFor={id} className={classes.categoryLabel}>
      {label}
      <input
        type="checkbox"
        id={id}
        className={classes.categoryInput}
        {...input}
      />
      <span className={classes.checkMark}></span>
    </label>
  );
};

export default CheckBox;
