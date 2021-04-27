import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import classes from './Rating.module.css';

const Rating = ({ rating }) => {
  return (
    <ul className={classes.list}>
      {[1, 2, 3, 4, 5].map(value => {
        if (rating >= value) {
          return (
            <li className={classes.item} key={value}>
              <FaStar className={classes.filled} />
            </li>
          );
        } else {
          return (
            <li className={classes.item} key={value}>
              <FaRegStar className={classes.fill} />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Rating;
