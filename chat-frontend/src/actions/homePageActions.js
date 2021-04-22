export const onCategoryBtnClick = category => async dispatch => {
  try {
    dispatch({ type: 'SET_ACTIVE_HOMEPAGE_CATEGORY', payload: category });

    //fetch chefcards data
  } catch (err) {
    console.log(err);

    dispatch({ type: 'SET_ERROR' });
  }
};

export const fetchInitialChefData = category => async dispatch => {
  try {
    dispatch({ type: 'START_LOADING' });

    //fetch chefcards data

    dispatch({ type: 'STOP_LOADING' });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'SET_ERROR' });
  }
};
