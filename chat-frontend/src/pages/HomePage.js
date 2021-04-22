import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BtnViewMore from '../components/BtnViewMore';
import SearchInput from '../components/SearchInput';
import OrangeBtn from '../components/OrangeBtn';
import PageContainer from '../containers/PageContainer';
import CategoriesBtn from '../components/CategoriesBtn';
import ChefCard from '../components/ChefCard';
import ChefCardLoader from '../components/ChefCardLoader';
import hero from '../images/hero.png';
import classes from './HomePage.module.css';
import sliderData from '../utils/testdata/sliderData';

const HomePage = props => {
  const activeCategory = useSelector(state => state.homePage.activeCategory);
  const chefCards = useSelector(state => state.homePage.chefCards);
  const cardsLoading = useSelector(state => state.homePage.isCardsLoading);

  const dispatch = useDispatch();

  //when the category btn is clicked
  const onCategoryBtnClick = async category => {
    try {
      dispatch({ type: 'SET_ACTIVE_HOMEPAGE_CATEGORY', payload: category });
      dispatch({ type: 'START_CARDS_LOADING' });

      //fetch chef data

      dispatch({ type: 'STOP_CARDS_LOADING' });
    } catch (err) {
      console.log(err);
      dispatch({ type: 'SET_ERROR' });
    }
  };

  return (
    <PageContainer>
      <section className={classes.hero}>
        <img src={hero} alt="hero" className={classes.heroImage} />
        <div>
          <h1 className={classes.heading}>
            Let the professionals do the work for you
          </h1>
          <OrangeBtn path="/learnmore" text="Learn More" />
        </div>
      </section>

      <section className={classes.categories}>
        <div className={classes.header}>
          <h2 className={classes.categoriesHeading}>Categories</h2>
          <BtnViewMore path="/categories" />
        </div>

        <SearchInput />

        <div className={classes.cardContainer}>
          {sliderData.map((data, index) => (
            <CategoriesBtn
              key={index}
              {...data}
              activeCategory={activeCategory}
              onClick={() => onCategoryBtnClick(data.category)}
            />
          ))}
        </div>
      </section>

      <section className={classes.contentSection}>
        <h2 className={classes.contentHeading}>{activeCategory}</h2>

        {cardsLoading ? <ChefCardLoader /> : ''}

        {cardsLoading ? (
          ''
        ) : (
          <ul className={classes.chefCardContainer}>
            <ChefCard />
            <ChefCard />
            <ChefCard />
            <ChefCard />
          </ul>
        )}
      </section>
    </PageContainer>
  );
};

export default HomePage;
