const initialState = {
  profileImage: '',
  foodImages: [],
  reviewImages: [],
};

const imageUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_IMAGE':
      return { ...state, profileImage: action.payload };

    case 'SET_FOOD_IMAGES':
      const imagesArr = [...state.foodImages];

      imagesArr[action.payload.index] = action.payload.image;

      return { ...state, foodImages: imagesArr };

    default:
      return state;
  }
};

export default imageUploadReducer;
