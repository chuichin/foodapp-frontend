import React from 'react';
import {
  notSignedInItems,
  userSignedInItems,
  chefSignedInItems,
} from '../utils/navBarItemData';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../images/hamburger.png';
import SideBarItem from './SideBarItem';
import classes from './SideBar.module.css';
import chef1 from '../images/chef1.jpg';

const SideBar = () => {
  const ui = useSelector(state => state.ui);

  const dispatch = useDispatch();

  const onLogoutBtnClick = () => {
    //handle logout
    dispatch({ type: 'LOGGED_OUT' });
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
      ui.userRole === 'user' ? userSignedInItems : chefSignedInItems;

    return (
      <>
        <img src={chef1} alt="user" className={classes.userImage} />
        <ul className={classes.list}>
          {content.map((el, index) => {
            if (el.text === 'Log Out') {
              return (
                <SideBarItem {...el} key={index} onClick={onLogoutBtnClick} />
              );
            }

            return <SideBarItem {...el} key={index} />;
          })}
        </ul>
      </>
    );
  };

  return <div className={classes.sidebar}>{renderContent()}</div>;
};

export default SideBar;
