import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../containers/PageContainer';
import classes from './CategoriesPage.module.css';

const categories = [
  'recommended',
  'western',
  'chinese',
  'italian',
  'french',
  'halal',
  'thai',
  'japanese',
  'korean',
  'mexican',
  'indonesian',
  'malaysian',
  'vietnamese',
];

const CategoriesPage = () => {
  return (
    <PageContainer>
      <h2 className={classes.heading}>All Categories</h2>

      <ul className={classes.categoryList}>
        {categories.map(category => (
          <li className={classes.categoryItem} key={category}>
            <Link to={`/search/${category}`} className={classes.link}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default CategoriesPage;
