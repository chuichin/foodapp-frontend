const initialState = {
  categories: [],
  isBooking: false,
};

const proposalFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROPOSAL_FORM_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'START_PROPOSAL_FORM_BOOKING':
      return { ...state, isBooking: true };
    case 'STOP_PROPOSAL_FORM_BOOKING':
      return { ...state, isBooking: false };
    default:
      return state;
  }
};

export default proposalFormReducer;
