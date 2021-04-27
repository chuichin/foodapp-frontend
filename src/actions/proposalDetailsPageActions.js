import axios from 'axios';

//for fetching proposal data when the page first render
export const fetchData = (bookingId, history) => async dispatch => {
  try {
    //start page loading
    dispatch({ type: 'START_PAGE_LOADING' });

    //fetch data
    const response = await axios.get(
      `http://localhost:7000/api/v1/bookings/${bookingId}`
    );

    const userResponse = await axios.get(
      `http://localhost:7000/api/v1/users/${response.data.booking.user}`
    );

    const { booking } = response.data;
    const { user } = userResponse.data;

    booking.userName = user.username;
    booking.email = user.email;

    dispatch({ type: 'SET_PROPOSAL_DETAILS_PAGE_PROPOSAL', payload: booking });

    //stop page loading
    dispatch({ type: 'STOP_PAGE_LOADING' });
  } catch (err) {
    console.log(err);
    //stop page loading
    dispatch({ type: 'STOP_PAGE_LOADING' });

    //navigate user to error page
    history.push('/error');
  }
};
