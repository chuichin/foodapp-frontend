const proposalDetailsPageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROPOSAL_DETAILS_PAGE_PROPOSAL':
      return action.payload;
    default:
      return state;
  }
};

export default proposalDetailsPageReducer;
