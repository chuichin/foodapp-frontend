import React from 'react';
import { useHistory } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import { onRadioBtnClick, postLoginData } from '../actions/loginPageAction';
import PageContainer from '../containers/PageContainer';
import TextInput from '../components/TextInput';
import SubmitBtn from '../components/SubmitBtn';
import PageLoader from '../components/PageLoader';
import SignUpLoginRadioBtn from '../components/SignUpLoginRadioBtn';
import classes from './LoginPage.module.css';
import logo from '../images/login.png';

const radioBtns = [
  { label: 'user', value: 'user', id: 'login_account_type_user' },
  { label: 'chef', value: 'chef', id: 'login_account_type_chef' },
];

const LoginPage = props => {
  const ui = useSelector(state => state.ui);

  const history = useHistory();

  const dispatch = useDispatch();

  //handling form submission
  const onLoginFormSubmit = formValues => {
    dispatch(postLoginData(formValues, ui.accountType, history));
  };

  //render the loader when the page is loading
  if (ui.isPageLoading) {
    return <PageLoader />;
  }

  return (
    <PageContainer>
      <div className={classes.imageContainer}>
        <img src={logo} alt="girl with cookies" className={classes.logo} />
      </div>

      <h3 className={classes.heading}>Hello Again! Welcome Back</h3>

      <form onSubmit={props.handleSubmit(onLoginFormSubmit)}>
        <div className={classes.radioBtnContainer}>
          <p className={classes.radioHeading}>Type of Account:</p>

          <ul className={classes.radioList}>
            {radioBtns.map(btn => {
              return (
                <SignUpLoginRadioBtn
                  {...btn}
                  key={btn.label}
                  accountType={ui.accountType}
                  onClick={onRadioBtnClick}
                />
              );
            })}
          </ul>
        </div>

        <div className={classes.listContainer}>
          <ul className={classes.loginList}>
            <li className={classes.loginItem}>
              <Field
                component={TextInput}
                name="email"
                label="email"
                inputType="email"
              />
            </li>
            <li className={classes.loginItem}>
              <Field
                component={TextInput}
                name="password"
                label="password"
                inputType="password"
              />
            </li>
          </ul>
        </div>

        <div className={classes.btnContainer}>
          <SubmitBtn text="Log In" />
        </div>
      </form>
    </PageContainer>
  );
};

//validate function for redux form
const validate = formValues => {
  const errors = {};

  //validating email field
  if (
    !formValues.email ||
    !formValues.email.includes('@') ||
    !formValues.email.includes('.')
  ) {
    errors.email = 'Please provide a valid email address.';
  }

  //validating password field
  if (!formValues.password || formValues.password.length < 8) {
    errors.password = 'A password should be at least 8 characters long.';
  }

  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginPage);
