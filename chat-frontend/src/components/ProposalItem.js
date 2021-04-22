import React from 'react';
import OrangeBtn from './OrangeBtn';
import classes from './ProposalItem.module.css';
import chef2 from '../images/chef2.jpg';

const ProposalItem = () => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.header}>
        <img src={chef2} alt="spencer" className={classes.userImage} />
        <div className={classes.detailsContainer}>
          <p className={classes.name}>Spencer</p>
          <p className={classes.date}>20/3/2021</p>
        </div>
      </div>

      <p className={classes.description}>Proposal for event on 25/5/2021</p>

      <div className={classes.btnContainer}>
        <OrangeBtn path="/proposals/12" text="View Details" />
      </div>
    </div>
  );
};

export default ProposalItem;
