const initialState = {
  activeCategory: 'recommended',
  chefCards: [],
  isCardsLoading: false,
  searchTerm: '',
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_HOMEPAGE_CATEGORY':
      return { ...state, activeCategory: action.payload };
    case 'FETCH_HOMEPAGE_CHEFS':
      return { ...state, chefCards: action.payload };
    case 'START_CARDS_LOADING':
      return { ...state, isCardsLoading: true };
    case 'STOP_CARDS_LOADING':
      return { ...state, isCardsLoading: false };
    case 'HOMEPAGE_SEARCH_INPUT_CHANGE':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default homePageReducer;
