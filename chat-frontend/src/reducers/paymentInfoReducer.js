const initialState = {
  activeSection: 'payment information',
};

const paymentInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAYMENT_INFO_PAGE_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
};

export default paymentInfoReducer;
