import React from 'react';
import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import classes from './UploadBtn.module.css';

const UploadBtn = ({ path, onClick }) => {
  return (
    <Link className={classes.btnUpload} to={path} onClick={onClick}>
      <FaPen />
    </Link>
  );
};

export default UploadBtn;
