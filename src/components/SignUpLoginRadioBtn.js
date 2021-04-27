import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './SignUpLoginRadioBtn.module.css';

const SignUpLoginRadioBtn = ({ label, value, id, onClick, accountType }) => {
  const dispatch = useDispatch();

  return (
    <li className={classes.radioBtnItem}>
      <input
        type="radio"
        id={id}
        name={id}
        value={value}
        className={classes.radioBtn}
        onClick={e => dispatch(onClick(e.target.value))}
      />
      <label
        htmlFor={id}
        className={`${classes.radioLabel} ${
          value === accountType ? classes.active : null
        }`}
      >
        {label}
      </label>
    </li>
  );
};

export default SignUpLoginRadioBtn;
