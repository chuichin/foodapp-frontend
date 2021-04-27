const initialState = {
  rating: 0,
  review: '',
  isError: false,
  isPageLoading: false,
  chef: {},
};

const reviewFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REVIEW_FORM_RATING':
      return { ...state, rating: action.payload };
    case 'SET_REVIEW_FORM_REVIEW':
      return { ...state, review: action.payload };
    case 'SET_REVIEW_FORM_ERROR':
      return { ...state, isError: true };
    case 'SET_REVIEW_FORM_NO_ERROR':
      return { ...state, isError: false };
    case 'START_REVIEW_FORM_LOADING':
      return { ...state, isPageLoading: true };
    case 'STOP_REVIEW_FORM_LOADING':
      return { ...state, isPageLoading: false };
    case 'SET_REVIEW_FORM_CHEF':
      return { ...state, chef: action.payload };
    default:
      return state;
  }
};

export default reviewFormReducer;
