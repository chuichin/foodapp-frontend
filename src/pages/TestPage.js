import React from 'react';
import PageContainer from '../containers/PageContainer';
import classes from './TestPage.module.css';

const TestPage = () => {
  return (
    <PageContainer>
      <div className={classes.pageContainer}>testpage</div>
    </PageContainer>
  );
};

export default TestPage;
