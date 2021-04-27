const initialState = {
  proposals: [],
};

const orderHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDER_HISTORY_PROPOSALS':
      return { ...state, proposals: action.payload };
    default:
      return state;
  }
};

export default orderHistoryReducer;
