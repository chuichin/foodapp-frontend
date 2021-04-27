const initialState = {
  chef: {},
  menus: [],
  activeSection: 'description',
  activeMenu: {},
  reviews: [],
  isReviewsLoading: false,
};

const chefDetailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHEF_DETAIL_PAGE_CHEF':
      return { ...state, chef: action.payload };
    case 'SET_CHEF_DETAIL_PAGE_MENUS':
      return { ...state, menus: action.payload };
    case 'SET_CHEF_DETAIL_PAGE_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };

    case 'SET_CHEF_DETAIL_PAGE_ACTIVE_MENU':
      const index = parseFloat(action.payload);

      const menu = state.menus[index];

      return {
        ...state,
        activeMenu: menu,
      };

    case 'SET_CHEF_DETAIL_PAGE_REVIEWS':
      return { ...state, reviews: action.payload };
    case 'START_CHEF_DETAIL_REVIEWS_LOADING':
      return { ...state, isReviewsLoading: true };
    case 'STOP_CHEF_DETAIL_REVIEWS_LOADING':
      return { ...state, isReviewsLoading: false };
    default:
      return state;
  }
};

export default chefDetailPageReducer;
