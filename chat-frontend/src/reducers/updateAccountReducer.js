const initialState = {
  userName: '',
  userEmail: '',
  categories: [],
  password: '',
  newPassword: '',
  confirmNewPassword: '',
};

const updateAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ACCOUNT_USER_NAME':
      return { ...state, userName: action.payload };
    case 'UPDATE_ACCOUNT_USER_EMAIL':
      return { ...state, userEmail: action.payload };
    case 'UPDATE_ACCOUNT_CATEGORIES':
      let newCategories = [...state.categories];

      if (action.payload.checked) {
        newCategories.push(action.payload.value);
      } else {
        newCategories = newCategories.filter(el => el !== action.payload.value);
      }

      return { ...state, categories: newCategories };
    case 'UPDATE_ACCOUNT_PASSWORD':
      return { ...state, password: action.payload };
    case 'UPDATE_ACCOUNT_NEW_PASSWORD':
      return { ...state, newPassword: action.payload };
    case 'UPDATE_ACCOUNT_CONFIRM_NEW_PASSWORD':
      return { ...state, confirmNewPassword: action.payload };
    default:
      return state;
  }
};

export default updateAccountReducer;
