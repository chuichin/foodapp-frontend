import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  onSearchPageInputChange,
  fetchSearchData,
} from '../actions/searchPageAction';
import ChefCardLoader from '../components/ChefCardLoader';
import PageContainer from '../containers/PageContainer';
import SearchInput from '../components/SearchInput';
import ChefCard from '../components/ChefCard';
import classes from './SearchPage.module.css';

const SearchPage = props => {
  const { term } = props.match.params;

  const history = useHistory();

  const searchPage = useSelector(state => state.searchPage);

  const dispatch = useDispatch();

  const searchInputRef = useRef();

  //set the term to search for when the page is first render
  useEffect(() => {
    dispatch({ type: 'SET_SEARCH_PAGE_FORM_SEARCH_TERM', payload: term });
  }, []);

  //fetch data whenever the search term changes
  useEffect(() => {
    dispatch(fetchSearchData(searchPage.formSearchTerm));
  }, [searchPage.formSearchTerm]);

  //handling when user enter a category into the search input
  const onSearchFormSubmit = e => {
    e.preventDefault();

    dispatch({
      type: 'SET_SEARCH_PAGE_FORM_SEARCH_TERM',
      payload: searchPage.searchTerm,
    });

    //make the input field empty
    dispatch({ type: 'SET_SEARCH_TERM', payload: '' });

    //change the term of the url page
    history.push(`/search/${searchPage.searchTerm}`);

    //unfocus the input
    searchInputRef.current.blur();
  };

  return (
    <PageContainer>
      <h1 className={classes.heading}>{`Search for: ${term}`}</h1>

      <form className={classes.searchForm} onSubmit={onSearchFormSubmit}>
        <SearchInput
          onChange={onSearchPageInputChange}
          value={searchPage.searchTerm}
          ref={searchInputRef}
        />
      </form>

      <ul className={classes.cardsContainer}>
        {searchPage.isCardsLoading ? (
          <div className={classes.loaderContainer}>
            <ChefCardLoader />
          </div>
        ) : (
          ''
        )}

        {searchPage.isCardsLoading
          ? ''
          : searchPage.chefCards.map(card => (
              <ChefCard {...card} key={card._id} />
            ))}

        {!searchPage.isCardsLoading && searchPage.chefCards.length === 0 ? (
          <p className={classes.noResults}>No results found</p>
        ) : (
          ''
        )}
      </ul>
    </PageContainer>
  );
};

export default SearchPage;
