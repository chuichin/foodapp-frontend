import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import ChefDetailPage from '../pages/ChefDetailPage';
import ProposalPage from '../pages/ProposalPage';
import ProposalsPage from '../pages/ProposalsPage';
import ProposalDetailsPage from '../pages/ProposalDetailsPage';
import UpdateChefDetailsPage from '../pages/UpdateChefDetailsPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AccountPage from '../pages/AccountPage';
import SingleChatPage from '../pages/SingleChatPage';
import ChatsPage from '../pages/ChatsPage';
import PaymentInfoPage from '../pages/PaymentInfoPage';
import CategoriesPage from '../pages/CategoriesPage';
import SignUpPageTwo from '../pages/SignUpPageTwo';
import Navbar from './Navbar';
import Header from './Header';
import SideBar from './SideBar';
import UploadModal from './UploadModal';
import ReviewsPage from '../pages/ReviewsPage';
import classes from './App.module.css';
import TestPage from '../pages/TestPage';

function App() {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;
  useEffect(() => {
    OneSignal.push(function() {
      OneSignal.init({
        appId: "61d46945-9409-40ea-ad2e-318848f4a5bf",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });
  },[])
  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentContainer}>
        <Navbar />
        <Header />
        <UploadModal />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup/chef" component={SignUpPageTwo} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/me" component={AccountPage} />
          <Route path="/search/:term" component={SearchPage} />
          <Route path="/chefs/update/:id" component={UpdateChefDetailsPage} />
          <Route path="/chefs/:chefId/proposal" component={ProposalPage} />
          <Route path="/chefs/:id" component={ChefDetailPage} />
          <Route path="/proposals/:id" component={ProposalDetailsPage} />
          <Route path="/proposals" component={ProposalsPage} />
          <Route path="/chats/:receiverEmail" component={SingleChatPage} />
          <Route path="/chats" component={ChatsPage} />
          <Route path="/reviews/:id" component={ReviewsPage} />
          <Route path="/orders/:id" component={PaymentInfoPage} />
          <Route path="/categories" component={CategoriesPage} />
          <Route path="/test" component={TestPage} />
        </Switch>
      </div>
      <div className={classes.sidebarContainer}>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
