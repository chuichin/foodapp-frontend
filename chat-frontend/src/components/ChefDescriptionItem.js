import React from 'react';
import classes from './ChefDescriptionItem.module.css';

const ChefDescriptionItem = ({ images, description, menu }) => {
  const renderImages = () => {
    return images.map((img, index) => (
      <li className={classes.foodItem} key={index}>
        <img src={img} alt={`food${index + 1}`} className={classes.foodImage} />
      </li>
    ));
  };

  const renderMenu = () => {
    return menu.map((el, index) => {
      return (
        <li className={classes.menuItem} key={index}>
          <ul className={classes.courseList}>
            <h4 className={classes.courseHeading}>{el.title}</h4>
            <li className={classes.courseItem}>
              <p className={classes.foodName}>{el.food}</p>
            </li>
          </ul>
        </li>
      );
    });
  };

  return (
    <div>
      <ul className={classes.foodImageContainer}>{renderImages()}</ul>

      <p className={classes.description}>{description}</p>

      <ul className={classes.menuContainer}>
        <h3 className={classes.menuHeading}>Menu</h3>

        {renderMenu()}
      </ul>
    </div>
  );
};

export default ChefDescriptionItem;
