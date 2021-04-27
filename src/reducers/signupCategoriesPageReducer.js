const signupCategoriesPageReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_SIGNUP_CATEGORIES_PAGE_ERROR':
      return true;
    case 'SET_SIGNUP_CATEGORIES_PAGE_NO_ERROR':
      return false;
    default:
      return state;
  }
};

export default signupCategoriesPageReducer;
