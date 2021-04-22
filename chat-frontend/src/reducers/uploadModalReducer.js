const initialState = {
  previewImage: null,
  imageFile: null,
  currentTask: '',
};

const uploadModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PREVIEW_IMAGE':
      return { ...state, previewImage: action.payload };
    case 'SET_IMAGE_FILE':
      return { ...state, imageFile: action.payload };
    case 'SET_UPLOAD_CURRENT_TASK':
      return { ...state, currentTask: action.payload };
    default:
      return state;
  }
};

export default uploadModalReducer;
