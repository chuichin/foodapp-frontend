import axios from 'axios';

//fetch reviews when the chef reviews page first loads
export const fetchChefReviews = (chefId, history) => async dispatch => {
  try {
    //start loading
    dispatch({ type: 'START_PAGE_LOADING' });

    //fetch all the reviews data
    const reviewsResponse = await axios.get(
      `http://localhost:7000/api/v1/reviews/chef/${chefId}`
    );

    const { reviews } = reviewsResponse.data;

    const userPromises = reviews.map(review =>
      axios.get(`http://localhost:7000/api/v1/users/${review.user}`)
    );

    const userResponses = await Promise.all(userPromises);
    const userDatas = userResponses.map(res => res.data.user);

    reviews.forEach((review, index) => {
      review.user = userDatas[index];
    });

    dispatch({ type: 'FETCH_CHEF_REVIEWS_PAGE_REVIEWS', payload: reviews });

    //stop loading
    dispatch({ type: 'STOP_PAGE_LOADING' });
  } catch (err) {
    console.log(err);

    dispatch({ type: 'STOP_PAGE_LOADING' });

    //navigate the user to the error page
    history.push('/error');
  }
};
