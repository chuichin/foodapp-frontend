import React from 'react';
import OrangeBtn from '../components/OrangeBtn';
import PageContainer from '../containers/PageContainer';
import classes from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <PageContainer>
      <div className={classes.pageContainer}>
        An error just occurred! Please press the button below to return to the
        home page.
        <div className={classes.btnContainer}>
          <OrangeBtn path="/" text="Home" />
        </div>
      </div>
    </PageContainer>
  );
};

export default ErrorPage;
