import React from 'react';
import classes from './SubmitBtn.module.css';

const SubmitBtn = ({ text, onClick }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitBtn;
