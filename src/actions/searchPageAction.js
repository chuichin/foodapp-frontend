import axios from 'axios';
import { toast } from 'react-toastify';

//for search input
export const onSearchPageInputChange = term => {
  return { type: 'SEARCH_PAGE_INPUT_CHANGE', payload: term };
};

//fetch chefs data
export const fetchSearchData = term => async dispatch => {
  try {
    //start loading
    dispatch({ type: 'START_SEARCH_PAGE_CARD_LOADING' });

    //fetch data
    const response = await axios.get(
      `http://localhost:7000/api/v1/categories/search/${term}`
    );

    const chefs = response.data.chefs;

    const chefsPromises = chefs.map(chef =>
      axios.get(`http://localhost:7000/api/v1/chefs/${chef.chef}`)
    );

    const chefsResponse = await Promise.all(chefsPromises);

    const chefsData = chefsResponse.map(res => res.data.chef);

    const promises = chefsData.map(chef =>
      axios.get(`http://localhost:7000/api/v1/categories/${chef._id}`)
    );

    const likePromises = chefsData.map(chef =>
      axios.get(`http://localhost:7000/api/v1/chefs/like/${chef._id}`)
    );

    const categoriesResponse = await Promise.all(promises);

    const likesResponse = await Promise.all(likePromises);

    const categoriesData = categoriesResponse.map(res => res.data.categories);
    const likesData = likesResponse.map(res => res.data.likes);

    chefsData.forEach((chef, index) => {
      chef.categories = categoriesData[index];
      chef.likes = likesData[index];
    });

    dispatch({ type: 'SET_SEARCH_PAGE_CHEF_CARDS', payload: chefsData });

    //stop loading
    dispatch({ type: 'STOP_SEARCH_PAGE_CARD_LOADING' });
  } catch (err) {
    console.log(err);

    //stop loading
    dispatch({ type: 'STOP_SEARCH_PAGE_CARD_LOADING' });

    //notify user of the error
    toast.error("An error occurred while fetching chefs' data", {
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
