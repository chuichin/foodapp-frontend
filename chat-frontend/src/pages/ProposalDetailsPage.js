import React from 'react';
import PageContainer from '../containers/PageContainer';
import SubmitBtn from '../components/SubmitBtn';
import classes from './ProposalDetailsPage.module.css';
import logo from '../images/proposalDetail.png';

const details = [
  { label: 'Name of customer:', value: 'Spencer' },
  { label: 'Email of customer:', value: 'spencer@test.com' },
  { label: 'Phone of customer:', value: '12345678' },
  { label: 'Type of sevice:', value: 'one time' },
  { label: 'No of people:', value: '2' },
  { label: 'Meal:', value: 'lunch' },
  { label: 'Menu:', value: 'package' },
  { label: 'Hob:', value: 'gas' },
  { label: 'Quantity of hob:', value: '2' },
  { label: 'Oven:', value: 'yes' },
  { label: 'Price:', value: '$300' },
  { label: 'Diet restriction:', value: 'no' },
  { label: 'Extra:', value: '' },
];

const ProposalDetailsPage = () => {
  return (
    <PageContainer>
      <div className={classes.header}>
        <img src={logo} alt="logo" className={classes.logo} />
        <h3 className={classes.heading}>Proposal's Details</h3>
      </div>

      <ul className={classes.detailsList}>
        {details.map((detail, index) => (
          <li className={classes.detailItem} key={index}>
            <div className={classes.detailContainer}>
              <p className={classes.label}>{detail.label}</p>
              <p className={classes.value}>{detail.value}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={classes.btnContainer}>
        <SubmitBtn text="Confirm proposal" />
      </div>
    </PageContainer>
  );
};

export default ProposalDetailsPage;
