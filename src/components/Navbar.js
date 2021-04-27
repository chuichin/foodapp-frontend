import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import {
  notSignedInItems,
  userSignedInItems,
  chefSignedInItems,
} from '../utils/navBarItemData';
import NavItem from './NavItem';
import classes from './Navbar.module.css';

const backgroundVariant = {
  open: {
    scale: 200,
    transition: {
      duration: 1,
    },
  },
  close: {
    scale: 1,
    transition: {
      duration: 1.35,
    },
  },
};

const navListVariant = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const navVariant = {
  open: {
    visibility: 'visible',
  },
  close: {
    visibility: 'hidden',
    transition: {
      delay: 1,
    },
  },
};

const Navbar = props => {
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

  const onToggleNavClick = () => {
    dispatch({ type: 'TOGGLE_NAV' });
  };

  const onNavItemClick = () => {
    dispatch({ type: 'CLOSE_NAV' });
  };

  const onLogoutBtnClick = () => {
    dispatch({ type: 'LOGGED_OUT' });
    dispatch({ type: 'CLOSE_NAV' });
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
          {notSignedInItems.map((item, index) => (
            <NavItem {...item} key={index} onClick={onNavItemClick} />
          ))}
        </>
      );
    }

    const content =
      ui.accountType === 'user' ? userSignedInItems : chefSignedInItems;

    return (
      <>
        {content.map((el, index) => {
          if (el.text === 'Log Out') {
            return (
              <NavItem
                {...el}
                key={index}
                onClick={onLogoutBtnClick}
                chefId={ui.chefId}
              />
            );
          }

          return (
            <NavItem
              {...el}
              key={index}
              onClick={onNavItemClick}
              chefId={ui.chefId}
            />
          );
        })}
      </>
    );
  };

  const active = ui.isNavOpen ? classes.active : null;

  return (
    <div className={classes.navigation}>
      <input
        type="checkbox"
        id="nav-toggle"
        className={classes.checkbox}
        onClick={onToggleNavClick}
      />
      <label htmlFor="nav-toggle" className={`${classes.label} ${active}`}>
        <span className={`${classes.line}`}></span>
      </label>

      <motion.div
        animate={ui.isNavOpen ? 'open' : 'close'}
        variants={backgroundVariant}
        className={classes.navBackground}
      >
        &nbsp;
      </motion.div>

      <motion.nav
        className={classes.nav}
        variants={navVariant}
        animate={ui.isNavOpen ? 'open' : 'close'}
        initial="close"
      >
        <motion.ul className={classes.navList} variants={navListVariant}>
          {renderContent()}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
