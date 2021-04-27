const initialState = {
  menus: [],
  activeMenu: {},
  isUpdating: false,
};

const updateChefDetailsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_UPDATE_CHEF_DETAILS_PAGE_MENUS':
      return { ...state, menus: action.payload };
    case 'SET_UPDATE_CHEF_DETAILS_ACTIVE_MENU':
      const index = parseFloat(action.payload);

      const menu = state.menus[index];

      return { ...state, activeMenu: menu };

    case 'START_UPDATING_CHEF_DETAILS_PAGE':
      return { ...state, isUpdating: true };
    case 'STOP_UPDATING_CHEF_DETAILS_PAGE':
      return { ...state, isUpdating: false };
    default:
      return state;
  }
};

export default updateChefDetailsPageReducer;
