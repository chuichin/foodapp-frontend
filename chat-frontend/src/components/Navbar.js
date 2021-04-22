import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
      duration: 1,
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

  const onToggleNavClick = () => {
    dispatch({ type: 'TOGGLE_NAV' });
  };

  const onLogoutBtnClick = () => {
    dispatch({ type: 'LOGGED_OUT' });
  };

  const renderContent = () => {
    if (!ui.isSignedIn) {
      return (
        <>
          {notSignedInItems.map((item, index) => (
            <NavItem {...item} key={index} />
          ))}
        </>
      );
    }

    const content =
      ui.userRole === 'user' ? userSignedInItems : chefSignedInItems;

    return (
      <>
        {content.map((el, index) => {
          if (el.text === 'Log Out') {
            return <NavItem {...el} key={index} onClick={onLogoutBtnClick} />;
          }

          return <NavItem {...el} key={index} />;
        })}
      </>
    );
  };

  return (
    <div className={classes.navigation}>
      <input
        type="checkbox"
        id="nav-toggle"
        className={classes.checkbox}
        onClick={onToggleNavClick}
      />
      <label htmlFor="nav-toggle" className={classes.label}>
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
