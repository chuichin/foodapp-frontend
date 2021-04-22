import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageContainer from '../containers/PageContainer';
import TabBtn from '../components/TabBtn';
import ProposalItem from '../components/ProposalItem';
import classes from './ProposalsPage.module.css';
import logo from '../images/proposal.png';

const tabs = ['confirmed proposals', 'my proposals'];

const ProposalsPage = () => {
  const activeSection = useSelector(state => state.proposalsPage.activeSection);

  const dispatch = useDispatch();

  const onTabBtnClick = tab => {
    dispatch({ type: 'SWITCH_PROPOSALS_PAGE_ACTIVE_SECTION', payload: tab });
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
            activeSection={activeSection}
            onClick={() => onTabBtnClick(tab)}
          />
        ))}
      </ul>

      <div className={classes.proposalList}>
        <ProposalItem />
        <ProposalItem />
        <ProposalItem />
        <ProposalItem />
      </div>
    </PageContainer>
  );
};

export default ProposalsPage;
