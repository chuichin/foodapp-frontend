import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import classes from './BackBtn.module.css';

const BackBtn = ({ path }) => {
  return (
    <Link to={path} className={classes.backBtn}>
      <FaChevronLeft />
    </Link>
  );
};

export default BackBtn;
