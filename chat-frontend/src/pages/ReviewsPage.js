import React from 'react';
import PageContainer from '../containers/PageContainer';
import ReviewItem from '../components/ReviewItem';
import classes from './ReviewsPage.module.css';

const ReviewsPage = () => {
  return (
    <PageContainer>
      <h2 className={classes.heading}>My Reviews</h2>

      <ul className={classes.reviewsList}>
        <li className={classes.reviewItem}>
          <ReviewItem />
        </li>
        <li className={classes.reviewItem}>
          <ReviewItem />
        </li>
      </ul>
    </PageContainer>
  );
};

export default ReviewsPage;
