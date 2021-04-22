import React from 'react';
import classes from './SelectBtn.module.css';

const SelectBtn = ({ menus, onChange }) => {
  return (
    <select
      name="food_category"
      id="food_category"
      className={classes.btnSelect}
      onChange={onChange}
    >
      {menus.map((data, index) => (
        <option value={index} key={index}>
          {data.category}
        </option>
      ))}
    </select>
  );
};

export default SelectBtn;
