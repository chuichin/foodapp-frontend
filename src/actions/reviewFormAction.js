import axios from 'axios';
import { toast } from 'react-toastify';

//set the rating when the rating buttons are clicked
export const onRatingBtnClick = rating => {
  return { type: 'SET_REVIEW_FORM_RATING', payload: rating };
};

//handling text area change
export const onTextAreaChange = term => {
  return { type: 'SET_REVIEW_FORM_REVIEW', payload: term };
};

//fetch chef data
export const fetchChefData = (chefId, history) => async dispatch => {
  try {
    //start loading
    dispatch({ type: 'START_PAGE_LOADING' });

    //fetch data
    const response = await axios.get(
      `http://localhost:7000/api/v1/chefs/${chefId}`
    );

    dispatch({ type: 'SET_REVIEW_FORM_CHEF', payload: response.data.chef });

    //stop loading
    dispatch({ type: 'STOP_PAGE_LOADING' });
  } catch (err) {
    console.log(err);

    //stop loading
    dispatch({ type: 'STOP_PAGE_LOADING' });

    //navigate user to error page
    history.push('/error');
  }
};

//post the review data to the api
export const postReview = (chefId, formValues, history) => async dispatch => {
  try {
    //start loading process
    dispatch({ type: 'START_REVIEW_FORM_LOADING' });

    //get token
    const token = localStorage.getItem('token');

    //post data to api
    await axios.post(
      `http://localhost:7000/api/v1/reviews/chef/${chefId}`,
      formValues,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    //notify user that it was successful
    toast.success('Review successfully created', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    //stop loading process
    dispatch({ type: 'STOP_REVIEW_FORM_LOADING' });

    //reset the value of the rating and the review
    dispatch({ type: 'SET_REVIEW_FORM_RATING', payload: 0 });
    dispatch({ type: 'SET_REVIEW_FORM_REVIEW', payload: '' });

    //navigate user to the proposals page
    history.push('/proposals');
  } catch (err) {
    console.log(err);

    //stop loading process
    dispatch({ type: 'STOP_REVIEW_FORM_LOADING' });

    //notify user of the error
    toast.error('Failed to create review', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
