import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  notSignedInItems,
  userSignedInItems,
  chefSignedInItems,
} from '../utils/navBarItemData';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../images/hamburger.png';
import SideBarItem from './SideBarItem';
import classes from './SideBar.module.css';

const SideBar = () => {
  const ui = useSelector(state => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const accountType = localStorage.getItem('accountType');
    const chefId = localStorage.getItem('chefId');

    if (token) {
      dispatch({ type: 'SIGNED_IN' });
    }

    if (chefId) {
      dispatch({ type: 'SET_CURRENT_CHEF_ID', payload: chefId });
    }

    if (accountType) {
      dispatch({ type: 'SET_ACCOUNT_TYPE', payload: accountType });
    }
  }, []);

  const onLogoutBtnClick = () => {
    dispatch({ type: 'LOGGED_OUT' });
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('accountType');
    localStorage.removeItem('chefId');

    toast.success('You have successfully logged out', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const renderContent = () => {
    if (!ui.isSignedIn) {
      return (
        <>
          <img src={logo} alt="hamburger" className={classes.logo} />
          <ul className={classes.list}>
            {notSignedInItems.map((item, index) => (
              <SideBarItem {...item} key={index} />
            ))}
          </ul>
        </>
      );
    }

    const content =
      ui.accountType === 'user' ? userSignedInItems : chefSignedInItems;

    return (
      <>
        <img src={logo} alt="hamburger" className={classes.logo} />
        <ul className={classes.list}>
          {content.map((el, index) => {
            if (el.text === 'Log Out') {
              return (
                <SideBarItem
                  {...el}
                  key={index}
                  onClick={onLogoutBtnClick}
                  chefId={ui.chefId}
                />
              );
            }

            return <SideBarItem {...el} key={index} chefId={ui.chefId} />;
          })}
        </ul>
      </>
    );
  };

  return <div className={classes.sidebar}>{renderContent()}</div>;
};

export default SideBar;
