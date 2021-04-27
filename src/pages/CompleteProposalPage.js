import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProposal } from '../actions/proposalConfirmationPageActions';
import PageContainer from '../containers/PageContainer';
import SubmitBtn from '../components/SubmitBtn';
import classes from './CompleteProposalPage.module.css';
import logo from '../images/confirm.png';

const CompleteProposalPage = props => {
  const { proposalId } = props.match.params;

  const history = useHistory();

  const dispatch = useDispatch();

  const proposalLoading = useSelector(state => state.proposalConfirmationPage);

  //handling btn click
  const onBtnClick = () => {
    dispatch(updateProposal(proposalId, history, 'complete'));
  };

  return (
    <PageContainer>
      <div className={classes.header}>
        <img src={logo} alt="logo" className={classes.logo} />
        <h2 className={classes.heading}>Completion</h2>
      </div>
      <p className={classes.message}>
        Click the button below to confirm that the chef had completed the
        service.
      </p>

      <div className={classes.btnContainer}>
        <SubmitBtn
          text={proposalLoading ? 'In Progress...' : 'Complete Proposal'}
          onClick={onBtnClick}
        />
      </div>
    </PageContainer>
  );
};

export default CompleteProposalPage;
