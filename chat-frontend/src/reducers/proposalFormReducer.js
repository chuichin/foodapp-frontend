const initialState = {
  address: '',
  serviceType: '',
  peopleNumber: '',
  mealType: '',
  menuType: '',
  hobType: '',
  hobNumber: '',
  oven: '',
  price: '',
  diet: '',
  date: '',
  message: '',
  userName: '',
  userEmail: '',
  userPhone: '',
};

const proposalFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROPOSAL_ADDRESS':
      return { ...state, address: action.payload };
    case 'SET_PROPOSAL_SERVICE_TYPE':
      return { ...state, serviceType: action.payload };
    case 'SET_PROPOSAL_PEOPLE_NUMBER':
      return { ...state, peopleNumber: action.payload };
    case 'SET_PROPOSAL_MEAL_TYPE':
      return { ...state, mealType: action.payload };
    case 'SET_PROPOSAL_MENU_TYPE':
      return { ...state, menuType: action.payload };
    case 'SET_PROPOSAL_HOB_TYPE':
      return { ...state, hobType: action.payload };
    case 'SET_PROPOSAL_HOB_NUMBER':
      return { ...state, hobNumber: action.payload };
    case 'SET_PROPOSAL_OVEN':
      return { ...state, oven: action.payload };
    case 'SET_PROPOSAL_PRICE':
      return { ...state, price: action.payload };
    case 'SET_PROPOSAL_DIET':
      return { ...state, diet: action.payload };
    case 'SET_PROPOSAL_DATE':
      return { ...state, date: action.payload };
    case 'SET_PROPOSAL_MESSAGE':
      return { ...state, message: action.payload };
    case 'SET_PROPOSAL_USER_NAME':
      return { ...state, userName: action.payload };
    case 'SET_PROPOSAL_USER_EMAIL':
      return { ...state, userEmail: action.payload };
    case 'SET_PROPOSAL_USER_PHONE':
      return { ...state, userPhone: action.payload };
    default:
      return state;
  }
};

export default proposalFormReducer;
