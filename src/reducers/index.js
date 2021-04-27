import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import uiReducer from './uiReducer';
import homePageReducer from './homePageReducer';
import searchPageReducer from './searchPageReducer';
import chefDetailPageReducer from './chefDetailPageReducer';
import chefReviewsPageReducer from './chefReviewsPageReducer';
import signupCategoriesPageReducer from './signupCategoriesPageReducer';
import updateChefDetailsPageReducer from './updateChefDetailsPageReducer';
import accountPageReducer from './accountPageReducer';
import proposalFormReducer from './proposalFormReducer';
import proposalDetailsPageReducer from './proposalDetailsPageReducer';
import reviewFormReducer from './reviewFormReducer';
import proposalsPageReducer from './proposalsPageReducer';
import uploadModalReducer from './uploadModalReducer';
import orderHistoryReducer from './orderHistoryReducer';
import proposalConfirmationPageReducer from './proposalConfirmationPageReducer';

import chatReducer from './chatReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  form: formReducer,
  ui: uiReducer,
  homePage: homePageReducer,
  searchPage: searchPageReducer,
  chefDetailPage: chefDetailPageReducer,
  chefReviewsPage: chefReviewsPageReducer,
  signupCategoriesPage: signupCategoriesPageReducer,
  updateChefDetailsPage: updateChefDetailsPageReducer,
  uploadModal: uploadModalReducer,
  accountPage: accountPageReducer,
  proposalForm: proposalFormReducer,
  proposalDetailsPage: proposalDetailsPageReducer,
  proposalsPage: proposalsPageReducer,
  reviewForm: reviewFormReducer,
  orderHistory: orderHistoryReducer,
  proposalConfirmationPage: proposalConfirmationPageReducer,
  chat: chatReducer,
  message: messageReducer,
});
