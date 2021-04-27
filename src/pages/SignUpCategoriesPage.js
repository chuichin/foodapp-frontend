import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  postCategoriesData,
  setPageError,
  stopPageError,
} from '../actions/signupCategoriesActions';
import PageContainer from '../containers/PageContainer';
import CheckBox from '../components/CheckBox';
import SubmitBtn from '../components/SubmitBtn';
import PageLoader from '../components/PageLoader';
import classes from './SignupCategoriesPage.module.css';
import categoriesData from '../utils/categoriesData';

const ChefSignUpPage = props => {
  const { chefId } = props.match.params;

  const history = useHistory();

  const dispatch = useDispatch();

  const ui = useSelector(state => state.ui);

  const pageError = useSelector(state => state.signupCategoriesPage);

  //handling form submit
  const onFormSubmit = formValues => {
    const arr = Object.keys(formValues);

    //set error to true if the user did not select any category
    if (arr.length === 0) {
      return dispatch(setPageError());
    }

    //set error to false
    dispatch(stopPageError());

    //create defaults menus
    dispatch(postCategoriesData(formValues, history, chefId));
  };

  //show loader when the page is loading
  if (ui.isPageLoading) {
    return <PageLoader />;
  }

  return (
    <PageContainer>
      <h2 className={classes.heading}>Categories</h2>

      <p className={classes.title}>
        Please choose one or more cuisines as your specialty from the list
        below:
      </p>

      <form onSubmit={props.handleSubmit(onFormSubmit)}>
        <ul className={classes.categoriesList}>
          {categoriesData.map((category, index) => (
            <li className={classes.categoryItem} key={index}>
              <Field
                name={category.label}
                component={CheckBox}
                label={category.label}
                id={category.id}
              />
            </li>
          ))}
        </ul>

        {pageError ? (
          <div className={classes.errorMsg}>
            Please select at least one category to continue
          </div>
        ) : (
          ''
        )}

        <div className={classes.btnContainer}>
          <SubmitBtn text="Submit" />
        </div>
      </form>
    </PageContainer>
  );
};

export default reduxForm({
  form: 'categoriesForm',
})(ChefSignUpPage);
