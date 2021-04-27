import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './UpdateInputField.module.css';

const UpdateInputField = ({ label, type }) => {
  const dispatch = useDispatch();

  const onInputChange = e => {
    dispatch({ type, payload: e.target.value });
  };

  return (
    <>
      <input
        type="text"
        className={classes.detailInput}
        onChange={onInputChange}
      />
      <label className={classes.detailLabel}>{`${label}:`}</label>
    </>
  );
};

export default UpdateInputField;
