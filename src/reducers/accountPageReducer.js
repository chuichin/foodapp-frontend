const initialState = {
  activeAccount: {},
  isUpdating: false,
};

const accountPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT_PAGE_ACTIVE_ACCOUNT':
      return { ...state, activeAccount: action.payload };
    case 'START_ACCOUNT_PAGE_UPDATE':
      return { ...state, isUpdating: true };
    case 'STOP_ACCOUNT_PAGE_UPDATE':
      return { ...state, isUpdating: false };
    default:
      return state;
  }
};

export default accountPageReducer;
