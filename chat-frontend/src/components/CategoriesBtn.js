import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import classes from './CategoriesBtn.module.css';

const CategoriesBtn = ({ category, icon, activeCategory, onClick }) => {
  return (
    <button
      className={`${classes.card} ${
        activeCategory === category ? classes.active : null
      }`}
      onClick={onClick}
    >
      <img src={icon} alt={category} className={classes.icon} />
      {category}
      <FaChevronRight className={classes.arrowIcon} />
    </button>
  );
};

export default CategoriesBtn;
