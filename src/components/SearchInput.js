import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import classes from './SearchInput.module.css';

const SearchInput = React.forwardRef(({ onChange, value }, ref) => {
  const dispatch = useDispatch();

  const onSearchInputChange = e => {
    dispatch(onChange(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        className={classes.inputField}
        placeholder="Search chefs using categories"
        onChange={onSearchInputChange}
        value={value}
        ref={ref}
      />
      <FaSearch className={classes.searchIcon} />
    </>
  );
});

export default SearchInput;
