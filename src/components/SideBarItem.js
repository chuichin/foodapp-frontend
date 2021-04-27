import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SideBarItem.module.css';

const SideBarItem = ({ path, icon, text, onClick, chefId }) => {
  const setPath = path => {
    let currentPath;

    if (text === 'My Page') {
      currentPath = `/chefs/${chefId}`;
    } else {
      currentPath = path;
    }

    return currentPath;
  };
  return (
    <li className={classes.listItem}>
      <Link to={setPath(path)} className={classes.link} onClick={onClick}>
        <span className={classes.icon}>{icon}</span>
        {text}
      </Link>
    </li>
  );
};

export default SideBarItem;
