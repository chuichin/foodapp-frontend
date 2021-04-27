import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import classes from './UpdateTextArea.module.css';

const UpdateTextArea = ({ input, label }) => {
  return (
    <div className={classes.description}>
      <TextareaAutosize
        minRows="7"
        className={classes.descriptionInput}
        {...input}
      />
      <label className={classes.descriptionLabel}>{`${label}:`}</label>
    </div>
  );
};

export default UpdateTextArea;
