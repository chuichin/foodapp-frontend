import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideBarItem.module.css';

const SideBarItem = ({ path, icon, text, onClick }) => {
  return (
    <li className={classes.listItem}>
      <Link to={path} className={classes.link} onClick={onClick}>
        <span className={classes.icon}>{icon}</span>
        {text}
      </Link>
    </li>
  );
};

export default SideBarItem;
