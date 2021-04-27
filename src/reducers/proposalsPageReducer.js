const initialState = {
  activeSection: 'confirmed proposals',
  proposals: [],
  isProposalsLoading: false,
};

const proposalsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_PROPOSALS_PAGE_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    case 'SET_PROPOSALS_PAGE_PROPOSALS':
      return { ...state, proposals: action.payload };
    case 'START_PROPOSALS_PAGE_ITEMS_LOADING':
      return { ...state, isProposalsLoading: true };
    case 'STOP_PROPOSALS_PAGE_ITEMS_LOADING':
      return { ...state, isProposalsLoading: false };
    default:
      return state;
  }
};

export default proposalsPageReducer;
