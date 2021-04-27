const initialState = {
  searchTerm: '',
  chefCards: [],
  isCardsLoading: false,
  formSearchTerm: '',
};

const searchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SEARCH_PAGE_INPUT_CHANGE':
      return { ...state, searchTerm: action.payload };
    case 'START_SEARCH_PAGE_CARD_LOADING':
      return { ...state, isCardsLoading: true };
    case 'STOP_SEARCH_PAGE_CARD_LOADING':
      return { ...state, isCardsLoading: false };
    case 'SET_SEARCH_PAGE_CHEF_CARDS':
      return { ...state, chefCards: action.payload };
    case 'SET_SEARCH_PAGE_FORM_SEARCH_TERM':
      return { ...state, formSearchTerm: action.payload };
    default:
      return state;
  }
};

export default searchPageReducer;
