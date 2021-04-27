const initialState = {
  previewImage: null,
  imageFile: null,
};

const uploadModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PREVIEW_IMAGE':
      return { ...state, previewImage: action.payload };
    case 'SET_IMAGE_FILE':
      return { ...state, imageFile: action.payload };
    default:
      return state;
  }
};

export default uploadModalReducer;
