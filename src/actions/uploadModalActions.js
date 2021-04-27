import axios from 'axios';
import { toast } from 'react-toastify';

//uploading image to cloud
export const uploadImage = (
  formData,
  uploadType,
  history,
  id
) => async dispatch => {
  try {
    //get token from local storage
    const token = localStorage.getItem('token');

    let url;

    if (uploadType === 'menuImages') {
      url = `http://localhost:7000/api/v1/menuImages/${id}`;
      await axios.patch(url, formData);
    }

    if (uploadType === 'chefProfileImage') {
      url = `http://localhost:7000/api/v1/chefs/image`;
      await axios.patch(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    if (uploadType === 'userProfileImage') {
      url = `http://localhost:7000/api/v1/users/image`;
      await axios.patch(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    //reset back to null
    dispatch({ type: 'SET_PREVIEW_IMAGE', payload: null });
    dispatch({ type: 'SET_IMAGE_FILE', payload: null });

    //go back to the last page
    history.goBack();
  } catch (err) {
    console.log(err);

    //notify user of the error
    toast.error('An error occurred while uploading image', {
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
