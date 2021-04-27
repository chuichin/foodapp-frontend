import axios from 'axios';
import { toast } from 'react-toastify';

//update proposal
export const updateProposal = (bookingId, history, type) => async dispatch => {
  try {
    //start process
    dispatch({ type: 'START_CANCEL_PROPOSAL_PROCESS' });

    let formValues;

    if (type === 'cancel') {
      formValues = { active: false };
    }

    if (type === 'confirm') {
      formValues = { confirmed: true };
    }

    if (type === 'complete') {
      formValues = { completed: true };
    }

    //update data at api
    await axios.patch(
      `http://localhost:7000/api/v1/bookings/${bookingId}`,
      formValues
    );

    //notify user of successful update
    toast.success('Proposal updated successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    //navigate user to proposals page
    history.push('/proposals');

    //stop process
    dispatch({ type: 'STOP_CANCEL_PROPOSAL_PROCESS' });
  } catch (err) {
    console.log(err);

    //stop process
    dispatch({ type: 'STOP_CANCEL_PROPOSAL_PROCESS' });

    //notify user of error
    toast.error('An error occurred. Please try again.', {
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
