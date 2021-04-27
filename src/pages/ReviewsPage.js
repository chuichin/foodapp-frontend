import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchReviews } from '../actions/reviewsPageActions';
import PageContainer from '../containers/PageContainer';
import ReviewItem from '../components/ReviewItem';
import classes from './ReviewsPage.module.css';

const ReviewsPage = () => {
  const reviewsPage = useSelector(state => state.reviewsPage);

  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <PageContainer>
      <h2 className={classes.heading}>My Reviews</h2>

      <ul className={classes.reviewsList}>
        {/* <li className={classes.reviewItem}>
          <ReviewItem />
        </li>
        <li className={classes.reviewItem}>
          <ReviewItem />
        </li> */}
      </ul>
    </PageContainer>
  );
};

export default ReviewsPage;
