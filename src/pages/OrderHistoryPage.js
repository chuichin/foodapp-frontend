import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../actions/orderHistoryPageActions';
import PageContainer from '../containers/PageContainer';
import PageLoader from '../components/PageLoader';
import ProposalItem from '../components/ProposalItem';
import classes from './OrderHistoryPage.module.css';

const OrderHistoryPage = () => {
  const dispatch = useDispatch();

  const ui = useSelector(state => state.ui);

  const orderHistory = useSelector(state => state.orderHistory);

  const history = useHistory();

  //fetch the orders after the page render
  useEffect(() => {
    const accountType = localStorage.getItem('accountType');

    if (accountType) {
      dispatch({ type: 'SET_ACCOUNT_TYPE', payload: accountType });
    }

    dispatch(fetchOrders(ui.accountType, history));
  }, []);

  //function for rendering proposals
  const renderProposals = () => {
    //render the sentence below if no proposal is found
    if (orderHistory.proposals.length === 0) {
      return <p className={classes.text}>No Proposal found</p>;
    }

    //render the proposals
    return (
      <ul className={classes.ordersList}>
        {orderHistory.proposals.map(proposal => (
          <li className={classes.orderItem} key={proposal._id}>
            <ProposalItem proposal={proposal} />
          </li>
        ))}
      </ul>
    );
  };

  //show loader when the page is loading
  if (ui.isPageLoading) {
    return <PageLoader />;
  }

  return (
    <PageContainer>
      <h2 className={classes.orderHeading}>Order History</h2>

      {renderProposals()}
    </PageContainer>
  );
};

export default OrderHistoryPage;
