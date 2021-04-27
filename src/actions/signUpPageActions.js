import axios from 'axios';
import { toast } from 'react-toastify';

//for handling radio btn click
export const onRadioBtnClick = value => {
  return { type: 'SET_ACCOUNT_TYPE', payload: value };
};

//for signing up users
export const postSignUpData = (
  formValues,
  accountType,
  history
) => async dispatch => {
  try {
    //start page loading
    dispatch({ type: 'START_PAGE_LOADING' });

    let url;

    if (accountType === 'user') {
      url = 'http://localhost:7000/api/v1/users';
    } else {
      url = 'http://localhost:7000/api/v1/chefs';
    }

    //sign up user
    const response = await axios.post(url, formValues);

    //save to localStorage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('accountType', accountType);

    dispatch({ type: 'SIGNED_IN' });

    if (accountType === 'user') {
      localStorage.setItem('email', response.data.user.email);
      history.push('/me');
    } else {
      localStorage.setItem('email', response.data.chef.email);
      localStorage.setItem('chefId', response.data.chef._id);
      history.push(`/signup/categories/${response.data.chef._id}`);
    }

    //stop page loading
    dispatch({ type: 'STOP_PAGE_LOADING' });
  } catch (err) {
    console.log(err);

    //stop page loading
    dispatch({ type: 'STOP_PAGE_LOADING' });

    //handle error using toast
    toast.error('An error occurred while signing up user', {
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
