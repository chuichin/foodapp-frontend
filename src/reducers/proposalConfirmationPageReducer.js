const cancelProposalReducer = (state = false, action) => {
  switch (action.type) {
    case 'START_CANCEL_PROPOSAL_PROCESS':
      return true;
    case 'STOP_CANCEL_PROPOSAL_PROCESS':
      return false;
    default:
      return state;
  }
};

export default cancelProposalReducer;
