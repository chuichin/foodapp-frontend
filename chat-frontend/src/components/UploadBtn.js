import React from 'react';
import { FaPen } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import classes from './UploadBtn.module.css';

const UploadBtn = ({ task }) => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch({ type: 'SHOW_UPLOAD_MODAL' });
    dispatch({ type: 'SET_UPLOAD_CURRENT_TASK', payload: task });
  };

  return (
    <button className={classes.btnUpload} onClick={onBtnClick}>
      <FaPen />
    </button>
  );
};

export default UploadBtn;
