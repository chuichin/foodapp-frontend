const initialState = {
  isNavOpen: false,
  isLoading: false,
  isEmojiPickerOpen: false,
  isError: false,
  isUploadModal: false,
  isSignedIn: false,
  userRole: 'chef',
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return { ...state, isNavOpen: !state.isNavOpen };
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    case 'TOGGLE_EMOJI_PICKER':
      return { ...state, isEmojiPickerOpen: !state.isEmojiPickerOpen };
    case 'SET_ERROR':
      return { ...state, isError: true };
    case 'HIDE_ERROR':
      return { ...state, isError: false };
    case 'SHOW_UPLOAD_MODAL':
      return { ...state, isUploadModal: true };
    case 'HIDE_UPLOAD_MODAL':
      return { ...state, isUploadModal: false };
    case 'SIGNED_IN':
      return { ...state, isSignedIn: true };
    case 'LOGGED_OUT':
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default uiReducer;
