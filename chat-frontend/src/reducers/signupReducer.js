const initialState = {
  name: '',
  email: '',
  password: '',
  phone: '',
  accountType: 'user',
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SIGNUP_NAME':
      return { ...state, name: action.payload };
    case 'SET_SIGNUP_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_SIGNUP_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_SIGNUP_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_SIGNUP_ACCOUNT_TYPE':
      return { ...state, accountType: action.payload };
    default:
      return state;
  }
};

export default signupReducer;
