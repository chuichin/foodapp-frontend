import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProposals, onTabBtnClick } from '../actions/proposalsPageActions';
import ChefCardLoader from '../components/ChefCardLoader';
import PageContainer from '../containers/PageContainer';
import TabBtn from '../components/TabBtn';
import ProposalItem from '../components/ProposalItem';
import classes from './ProposalsPage.module.css';
import logo from '../images/proposal.png';

const tabs = ['confirmed proposals', 'my proposals'];

const ProposalsPage = () => {
  const proposalsPage = useSelector(state => state.proposalsPage);
  const ui = useSelector(state => state.ui);

  const dispatch = useDispatch();

  //initialization when the page first render
  useEffect(() => {
    const accountType = localStorage.getItem('accountType');

    if (accountType) {
      dispatch({ type: 'SET_ACCOUNT_TYPE', payload: accountType });
    }
  }, []);

  //fetch the relevant data everytime the active section of the page changes
  useEffect(() => {
    dispatch(fetchProposals(ui.accountType, proposalsPage.activeSection));
  }, [proposalsPage.activeSection]);

  //render the proposals
  const renderProposals = () => {
    //show loader when the data is being fetched
    if (proposalsPage.isProposalsLoading) {
      return (
        <div className={classes.loaderContainer}>
          <ChefCardLoader />
        </div>
      );
    }

    //show the sentence below when no proposals are found
    if (proposalsPage.proposals.length === 0) {
      return <p className={classes.noFoundText}>No proposals found.</p>;
    }

    //show the relevant proposals
    return (
      <>
        {proposalsPage.proposals.map((proposal, index) => (
          <ProposalItem key={index} proposal={proposal} />
        ))}
      </>
    );
  };

  return (
    <PageContainer>
      <div className={classes.header}>
        <img src={logo} alt="logo" className={classes.logo} />
        <h2 className={classes.heading}>Proposals</h2>
      </div>

      <ul className={classes.tabsList}>
        {tabs.map(tab => (
          <TabBtn
            text={tab}
            key={tab}
            activeSection={proposalsPage.activeSection}
            onClick={() => dispatch(onTabBtnClick(tab))}
          />
        ))}
      </ul>

      <div className={classes.proposalList}>{renderProposals()}</div>
    </PageContainer>
  );
};

export default ProposalsPage;
