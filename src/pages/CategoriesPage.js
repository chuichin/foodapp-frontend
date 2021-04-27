import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../containers/PageContainer';
import classes from './CategoriesPage.module.css';
import categories from '../utils/categoriesData';

const CategoriesPage = () => {
  return (
    <PageContainer>
      <h2 className={classes.heading}>All Categories</h2>

      <ul className={classes.categoryList}>
        {categories.map(category => (
          <li className={classes.categoryItem} key={category.id}>
            <Link to={`/search/${category.label}`} className={classes.link}>
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default CategoriesPage;
