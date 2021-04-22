import React from 'react';
import classes from './TabBtn.module.css';

const TabBtn = ({ text, activeSection, onClick }) => {
  const active = activeSection === text ? classes.active : null;

  return (
    <li className={classes.item}>
      <button className={`${classes.btnTab} ${active}`} onClick={onClick}>
        {text}
      </button>
    </li>
  );
};

export default TabBtn;
