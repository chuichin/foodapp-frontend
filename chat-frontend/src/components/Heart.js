import React from 'react';
import { FaHeart } from 'react-icons/fa';
import classes from './Heart.module.css';

const Heart = () => {
  return <FaHeart className={classes.liked} />;
};

export default Heart;
