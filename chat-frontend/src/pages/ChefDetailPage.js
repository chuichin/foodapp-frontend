import React from 'react';
import Calendar from 'react-calendar';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PageContainer from '../containers/PageContainer';
import ChefDescriptionItem from '../components/ChefDescriptionItem';
import Rating from '../components/Rating';
import TabBtn from '../components/TabBtn';
import ReviewItem from '../components/ReviewItem';
import OrangeBtn from '../components/OrangeBtn';
import SelectBtn from '../components/SelectBtn';
import classes from './ChefDetailPage.module.css';
import chef1 from '../images/chef1.jpg';
import 'react-calendar/dist/Calendar.css';
import chefDetailsData from '../utils/testdata/chefDetailsData';

const tabs = [{ text: 'description' }, { text: 'reviews' }];

const ChefDetailPage = props => {
  const activeSection = useSelector(
    state => state.chefDetailPage.activeSection
  );

  const activeMenu = useSelector(state => state.chefDetailPage.activeMenu);

  const menus = useSelector(state => state.chefDetailPage.menus);

  const userRole = useSelector(state => state.ui.userRole);

  const dispatch = useDispatch();

  const onTabBtnClick = async tab => {
    try {
      dispatch({ type: 'SET_CHEFDETAILPAGE_ACTIVE_SECTION', payload: tab });

      if (tab === 'reviews') {
        //fetch data of reviews
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: 'SET_ERROR' });
    }
  };

  const onBtnSelectChange = e => {
    dispatch({
      type: 'SET_CHEFDETAILPAGE_ACTIVE_MENU',
      payload: e.target.value,
    });
  };

  const active = userRole === 'chef' ? classes.active : null;

  return (
    <PageContainer>
      <div className={classes.btnUpdateContainer}>
        <Link
          to="/chefs/update/12"
          className={`${classes.btnUpdate} ${active}`}
        >
          Update Page
        </Link>
      </div>

      <div className={classes.contentContainer}>
        <img src={chef1} alt="Mike" className={classes.chefImage} />
        <h2 className={classes.name}>Mike</h2>

        <ul className={classes.categoriesList}>
          <li className={classes.categoryItem}>
            <h4 className={classes.categories}>Western</h4>
          </li>
          <li className={classes.categoryItem}>
            <h4 className={classes.categories}>French</h4>
          </li>
          <li className={classes.categoryItem}>
            <h4 className={classes.categories}>Italian</h4>
          </li>
        </ul>

        <div className={classes.ratingContainer}>
          <Rating />
        </div>

        <ul className={classes.tabsContainer}>
          {tabs.map((tab, index) => (
            <TabBtn
              key={index}
              {...tab}
              activeSection={activeSection}
              onClick={() => onTabBtnClick(tab.text)}
            />
          ))}

          <li>
            <SelectBtn menus={menus} onChange={onBtnSelectChange} />
          </li>
        </ul>

        {activeSection === 'reviews' ? (
          <ul className={classes.reviewsContainer}>
            <li className={classes.reviewItem}>
              <ReviewItem />
            </li>
            <li className={classes.reviewItem}>
              <ReviewItem />
            </li>
          </ul>
        ) : (
          ''
        )}

        {activeSection === 'description' ? (
          <ChefDescriptionItem {...activeMenu} />
        ) : (
          ''
        )}

        <div className={classes.calendarContainer}>
          <h3 className={classes.calendarHeading}>Calendar</h3>
          <Calendar />
        </div>

        <div className={classes.proposalContainer}>
          <p className={classes.proposalHeading}>
            Make sure to send a proposal three days before.
          </p>

          <OrangeBtn path={`/chefs/12/proposal`} text="Send proposal" />
        </div>
      </div>
    </PageContainer>
  );
};

export default ChefDetailPage;
