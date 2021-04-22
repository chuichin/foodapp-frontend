import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageContainer from '../containers/PageContainer';
import TabBtn from '../components/TabBtn';
import ProposalItem from '../components/ProposalItem';
import classes from './PaymentInfoPage.module.css';

const tabs = ['payment information', 'orders history'];

const PaymentInfoPage = () => {
  const activeSection = useSelector(state => state.paymentInfo.activeSection);

  const dispatch = useDispatch();

  const onTabBtnClick = tab => {
    //dispatch
    dispatch({ type: 'SET_PAYMENT_INFO_PAGE_ACTIVE_SECTION', payload: tab });
  };

  return (
    <PageContainer>
      <ul className={classes.tabsList}>
        {tabs.map(tab => {
          return (
            <TabBtn
              text={tab}
              activeSection={activeSection}
              key={tab}
              onClick={() => onTabBtnClick(tab)}
            />
          );
        })}
      </ul>

      {activeSection === 'payment information' ? (
        <div className={classes.paymentSection}>
          <p>payment information</p>
        </div>
      ) : (
        ''
      )}

      {activeSection === 'orders history' ? (
        <ul className={classes.ordersList}>
          <li className={classes.orderItem}>
            <ProposalItem />
          </li>
          <li className={classes.orderItem}>
            <ProposalItem />
          </li>
          <li className={classes.orderItem}>
            <ProposalItem />
          </li>
        </ul>
      ) : (
        ''
      )}
    </PageContainer>
  );
};

export default PaymentInfoPage;
