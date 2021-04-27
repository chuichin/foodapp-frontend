import axios from 'axios';
import { toast } from 'react-toastify';

//fetching chef's data and his or her menus' details when the page is visited
export const fetchChefData = (id, history) => async dispatch => {
  try {
    //start loading
    dispatch({ type: 'START_PAGE_LOADING' });

    //fetch all the data for the menus
    const responses = await Promise.all([
      axios.get(`http://localhost:7000/api/v1/chefs/${id}`),
      axios.get(`http://localhost:7000/api/v1/menus/${id}`),
      axios.get(`http://localhost:7000/api/v1/categories/${id}`),
      axios.get(`http://localhost:7000/api/v1/bookings/chefs/${id}`),
    ]);

    const datas = responses.map(res => res.data);

    const { chef } = datas[0];
    const { menus } = datas[1];
    const { categories } = datas[2];

    const bookings = datas[3].bookings.filter(
      booking => booking.confirmed === true
    );

    const confirmedDates = bookings.map(
      booking => new Date(booking.proposalDate)
    );

    const filteredCategories = categories.map(category => category.category);

    chef.categories = filteredCategories;
    chef.confirmedDates = confirmedDates;

    const menuImagesPromises = menus.map(menu =>
      axios.get(`http://localhost:7000/api/v1/menuImages/menu/${menu._id}`)
    );

    const menuImagesResponses = await Promise.all(menuImagesPromises);
    const menuImagesData = menuImagesResponses.map(res => res.data.images);
    const menuImages = menuImagesData.map(arr => {
      return arr.map(el => el.imagePath);
    });

    menus.forEach((menu, index) => {
      menu.images = menuImages[index];
    });

    dispatch({ type: 'SET_CHEF_DETAIL_PAGE_CHEF', payload: chef });
    dispatch({ type: 'SET_CHEF_DETAIL_PAGE_MENUS', payload: menus });
    dispatch({ type: 'SET_CHEF_DETAIL_PAGE_ACTIVE_MENU', payload: 0 });

    //stop loading
    dispatch({ type: 'STOP_PAGE_LOADING' });
  } catch (err) {
    //handle error
    console.log(err);
    dispatch({ type: 'STOP_PAGE_LOADING' });

    //navigate the user to the error page
    history.push('/error');
  }
};

//for handling tab btns clicks
export const onTabBtnClick = (tab, id) => async dispatch => {
  try {
    //set the active section
    dispatch({ type: 'SET_CHEF_DETAIL_PAGE_ACTIVE_SECTION', payload: tab });

    //if the reviews tab is clicked
    if (tab === 'reviews') {
      //start reviews loading
      dispatch({ type: 'START_CHEF_DETAIL_REVIEWS_LOADING' });

      //fetch reviews for chef
      const response = await axios.get(
        `http://localhost:7000/api/v1/reviews/chef/${id}`
      );

      const { reviews } = response.data;

      const userPromises = reviews.map(review =>
        axios.get(`http://localhost:7000/api/v1/users/${review.user}`)
      );

      const userResponses = await Promise.all(userPromises);
      const userDatas = userResponses.map(res => res.data.user);

      reviews.forEach((review, index) => {
        review.user = userDatas[index];
      });

      dispatch({ type: 'SET_CHEF_DETAIL_PAGE_REVIEWS', payload: reviews });

      //stop the review loading
      dispatch({ type: 'STOP_CHEF_DETAIL_REVIEWS_LOADING' });
    }
  } catch (err) {
    //handle errors
    console.log(err);
    dispatch({ type: 'STOP_CHEF_DETAIL_REVIEWS_LOADING' });

    //notify the user of the error
    toast.error('The reviews failed to load!', {
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

//handling when the select btn is clicked
export const onBtnSelectChange = index => {
  return { type: 'SET_CHEF_DETAIL_PAGE_ACTIVE_MENU', payload: index };
};
