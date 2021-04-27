import axios from 'axios';

//for fetching orders
export const fetchOrders = (accountType, history) => async dispatch => {
  try {
    //start page loading
    dispatch({ type: 'START_PAGE_LOADING' });

    //get token from local storage
    const token = localStorage.getItem('token');

    let url;

    if (accountType === 'chef') {
      url = 'http://localhost:7000/api/v1/bookings/chefs/all';
    } else {
      url = 'http://localhost:7000/api/v1/bookings/users/all';
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { bookings } = response.data;

    const bookingsDisplay = bookings.filter(
      booking => booking.completed === true
    );

    let promises;

    if (accountType === 'chef') {
      promises = bookingsDisplay.map(booking =>
        axios.get(`http://localhost:7000/api/v1/users/${booking.user}`)
      );
    } else {
      promises = bookingsDisplay.map(booking =>
        axios.get(`http://localhost:7000/api/v1/chefs/${booking.chef}`)
      );
    }

    const accountRes = await Promise.all(promises);

    const datas = accountRes.map(res => {
      return res.data.user || res.data.chef;
    });

    bookingsDisplay.forEach((booking, index) => {
      booking.account = datas[index];
    });

    dispatch({ type: 'SET_ORDER_HISTORY_PROPOSALS', payload: bookingsDisplay });

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
