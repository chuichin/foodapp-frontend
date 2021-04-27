import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import classes from './NavItem.module.css';

const item = {
  open: {
    opacity: 1,
    y: 0,
  },
  close: {
    opacity: 0,
    y: 50,
  },
};

const NavItem = ({ text, icon, path, onClick, chefId }) => {
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
    <motion.li
      className={classes.navItem}
      variants={item}
      whileHover={{ x: 10 }}
    >
      <Link to={setPath(path)} className={classes.link} onClick={onClick}>
        <span className={classes.itemLogo}>{icon}</span>
        {text}
      </Link>
    </motion.li>
  );
};

export default NavItem;
