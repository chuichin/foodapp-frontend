const initialState = {
  activeSection: 'confirmed proposals',
};

const proposalsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_PROPOSALS_PAGE_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
};

export default proposalsPageReducer;
