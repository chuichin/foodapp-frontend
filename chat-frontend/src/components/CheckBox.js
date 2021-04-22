import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './CheckBox.module.css';

const CheckBox = ({ type, value, label }) => {
  const dispatch = useDispatch();

  const onCheckBoxChange = e => {
    const payload = { value: e.target.value, checked: e.target.checked };

    dispatch({ type: 'UPDATE_ACCOUNT_CATEGORIES', payload });
  };

  return (
    <label htmlFor={type} className={classes.categoryLabel}>
      {label}
      <input
        type="checkbox"
        id={type}
        value={value}
        className={classes.categoryInput}
        onChange={onCheckBoxChange}
      />
      <span className={classes.checkMark}></span>
    </label>
  );
};

export default CheckBox;
