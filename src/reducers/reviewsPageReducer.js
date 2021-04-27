const initialState = {
  reviews: [],
};

const reviewsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REVIEWS_PAGE_REVIEWS':
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};

export default reviewsPageReducer;
