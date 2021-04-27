import React from 'react';
import { motion } from 'framer-motion';
import PageContainer from '../containers/PageContainer';
import classes from './PageLoader.module.css';

const loaderVariants = {
  loading: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

const loaderItemVariants = {
  loading: {
    y: [0, -100],
    transition: {
      repeatType: 'reverse',
      repeat: Infinity,
      duration: 0.5,
      ease: [0.19, 0.57, 0.3, 0.98],
    },
  },
};

const items = ['', '', '', ''];

const PageLoader = () => {
  return (
    <PageContainer>
      <div className={classes.pageContainer}>
        <motion.ul
          className={classes.loaderContainer}
          variants={loaderVariants}
          animate="loading"
        >
          {items.map((item, index) => {
            return (
              <motion.li
                className={classes.loaderItem}
                variants={loaderItemVariants}
                key={index}
              ></motion.li>
            );
          })}
        </motion.ul>
      </div>
    </PageContainer>
  );
};

export default PageLoader;
