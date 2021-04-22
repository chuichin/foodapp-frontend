import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';
import homePageReducer from './homePageReducer';
import chefDetailPageReducer from './chefDetailPageReducer';
import proposalFormReducer from './proposalFormReducer';
import updateAccountReducer from './updateAccountReducer';
import uploadModalReducer from './uploadModalReducer';
import proposalsPageReducer from './proposalsPageReducer';
import paymentInfoReducer from './paymentInfoReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

export default combineReducers({
  ui: uiReducer,
  chat: chatReducer,
  message: messageReducer,
  homePage: homePageReducer,
  chefDetailPage: chefDetailPageReducer,
  proposalForm: proposalFormReducer,
  updateAccount: updateAccountReducer,
  uploadModal: uploadModalReducer,
  proposalsPage: proposalsPageReducer,
  paymentInfo: paymentInfoReducer,
  login: loginReducer,
  signup: signupReducer,
});
