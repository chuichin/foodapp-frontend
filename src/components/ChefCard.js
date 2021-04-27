`import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Heart from './Heart';
import classes from './ChefCard.module.css';

const ChefCard = ({
  ratingAverage,
  profileImage,
  _id,
  username,
  categories,
  likes,
}) => {`
  return (
    <li className={classes.item}>
      <Link to={`/chefs/${_id}`} className={classes.cardContainer}>
        <div className={classes.imageContainer}>
          <img
            src={profileImage}
            alt={username}
            className={classes.chefImage}
          />
        </div>
        <div className={classes.detailContainer}>
          <p className={classes.name}>{username}</p>
          <ul className={classes.categoriesList}>
            {categories.map((el, index) => (
              <li className={classes.categoryItem} key={index}>
                <p className={classes.category}>{el.category}</p>
              </li>
            ))}
          </ul>
          <Rating rating={ratingAverage} />
        </div>
        <div className={classes.heartContainer}>
          <Heart /> <span className={classes.likeNumber}>{likes.length}</span>
        </div>
      </Link>
    </li>
  );
};

export default ChefCard;
