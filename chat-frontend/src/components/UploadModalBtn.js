import React from 'react';
import { FaPen } from 'react-icons/fa';
import classes from './UploadModalBtn.module.css';

const UploadBtn = () => {
  return (
    <div className={classes.inputContainer}>
      <input type="file" id="profile_image" className={classes.fileInput} />
      <label htmlFor="profile_image" className={classes.btnUpload}>
        <FaPen />
      </label>
    </div>
  );
};

export default UploadBtn;
