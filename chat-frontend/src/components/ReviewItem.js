import React from 'react';
import Rating from './Rating';
import classes from './ReviewItem.module.css';
import chef2 from '../images/chef2.jpg';

const ReviewItem = () => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.header}>
        <img src={chef2} alt="spencer" className={classes.userImage} />
        <div className={classes.detailsContainer}>
          <p className={classes.name}>Spencer</p>
          <p className={classes.date}>24/3/2021</p>
        </div>
        <div className={classes.ratingContainer}>
          <Rating />
        </div>
      </div>
      <p className={classes.review}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere
        dui facilisis massa vehicula rutrum. Sed id malesuada orci. Duis ac
        dolor ultricies turpis consequat pulvinar. Nullam odio ante, semper sed
        nunc egestas, tincidunt venenatis libero.
      </p>
    </div>
  );
};

export default ReviewItem;
