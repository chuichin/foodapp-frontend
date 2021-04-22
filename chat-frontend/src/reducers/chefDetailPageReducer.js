import chefDetailsData from '../utils/testdata/chefDetailsData';

const initialState = {
  activeSection: 'description',
  chef: {},
  menus: chefDetailsData,
  activeMenu: chefDetailsData[0],
};

const chefDetailPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHEFDETAILPAGE_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    case 'SET_CHEFDETAILPAGE_ACTIVE_CHEF':
      return { ...state, chef: action.payload };
    case 'SET_CHEFDETAILPAGE_ACTIVE_MENU':
      const index = parseFloat(action.payload);

      const menu = state.menus[index];

      return {
        ...state,
        activeMenu: menu,
      };

    case 'UPDATE_CHEFDETAILPAGE_DESCRIPTION':
      const newMenu = { ...state.activeMenu };
      newMenu.description = action.payload;
      return { ...state, activeMenu: newMenu };

    case 'UPDATE_CHEFDETAILPAGE_APPETIZER':
      const newMenu1 = { ...state.activeMenu };
      newMenu1.menu[0].food = action.payload;
      return { ...state, activeMenu: newMenu1 };

    case 'UPDATE_CHEFDETAILPAGE_STARTER':
      const newMenu2 = { ...state.activeMenu };
      newMenu2.menu[1].food = action.payload;
      return { ...state, activeMenu: newMenu2 };

    case 'UPDATE_CHEFDETAILPAGE_MAIN':
      const newMenu3 = { ...state.activeMenu };
      newMenu3.menu[2].food = action.payload;
      return { ...state, activeMenu: newMenu3 };

    case 'UPDATE_CHEFDETAILPAGE_DESSERT':
      const newMenu4 = { ...state.activeMenu };
      newMenu4.menu[3].food = action.payload;
      return { ...state, activeMenu: newMenu4 };

    default:
      return state;
  }
};

export default chefDetailPageReducer;
