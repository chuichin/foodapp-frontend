const ChefReviewsPageReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CHEF_REVIEWS_PAGE_REVIEWS':
      return action.payload;
    default:
      return state;
  }
};

export default ChefReviewsPageReducer;
