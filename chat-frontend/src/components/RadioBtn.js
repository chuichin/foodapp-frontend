import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './RadioBtn.module.css';

const RadioBtn = ({ label, value, id, name, dispatchType }) => {
  const dispatch = useDispatch();

  const onRadioBtnClick = e => {
    dispatch({ type: dispatchType, payload: e.target.value });
  };

  return (
    <div className={classes.btnContainer}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className={classes.btn}
        onClick={onRadioBtnClick}
      />
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
    </div>
  );
};

export default RadioBtn;
