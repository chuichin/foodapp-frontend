import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onRadioBtnClick, postSignUpData } from '../actions/signUpPageActions';
import PageLoader from '../components/PageLoader';
import PageContainer from '../containers/PageContainer';
import SignUpLoginRadioBtn from '../components/SignUpLoginRadioBtn';
import TextInput from '../components/TextInput';
import SubmitBtn from '../components/SubmitBtn';
import classes from './SignupPage.module.css';
import logo from '../images/signup.png';

const radioBtns = [
  {
    label: 'user',
    value: 'user',
    id: 'sign_up_account_type_user',
  },
  {
    label: 'chef',
    value: 'chef',
    id: 'sign_up_account_type_chef',
  },
];

const SignupPage = props => {
  const ui = useSelector(state => state.ui);

  const dispatch = useDispatch();

  const history = useHistory();

  //handling form submit
  const onFormSubmit = formValues => {
    dispatch(postSignUpData(formValues, ui.accountType, history));
  };

  //show loader when the page is loading
  if (ui.isPageLoading) {
    return <PageLoader />;
  }

  return (
    <PageContainer>
      <div className={classes.imageContainer}>
        <img src={logo} alt="girl with cookies" className={classes.logo} />
      </div>

      <h3 className={classes.heading}>
        Don't have an account yet? Sign up here
      </h3>

      <form onSubmit={props.handleSubmit(onFormSubmit)}>
        <div className={classes.radioBtnContainer}>
          <p className={classes.radioBtnHeading}>Type of account:</p>
          <ul className={classes.radioBtnList}>
            {radioBtns.map(btn => {
              return (
                <SignUpLoginRadioBtn
                  {...btn}
                  key={btn.value}
                  accountType={ui.accountType}
                  onClick={onRadioBtnClick}
                />
              );
            })}
          </ul>
        </div>

        <div className={classes.listContainer}>
          <ul className={classes.signUpList}>
            <li className={classes.signUpItem}>
              {/* replace username with name */}
              <Field
                name="username"
                component={TextInput}
                label="name"
                inputType="text"
              />
            </li>

            <li className={classes.signUpItem}>
              <Field
                name="email"
                component={TextInput}
                label="email"
                inputType="email"
              />
            </li>

            <li className={classes.signUpItem}>
              <Field
                name="password"
                component={TextInput}
                label="password"
                inputType="password"
              />
            </li>

            <li className={classes.signUpItem}>
              <Field
                name="phone"
                component={TextInput}
                label="phone"
                inputType="text"
              />
            </li>
          </ul>
        </div>

        <div className={classes.btnContainer}>
          <SubmitBtn text="Sign Up" />
        </div>
      </form>
    </PageContainer>
  );
};

//validate function for redux form
const validate = formValues => {
  const errors = {};

  //change this to name
  if (!formValues.username) {
    errors.username = 'Please provide a valid name.';
  }

  if (
    !formValues.email ||
    !formValues.email.includes('@') ||
    !formValues.email.includes('.')
  ) {
    errors.email = 'Please provide a valid email.';
  }

  if (!formValues.password || formValues.password.length < 8) {
    errors.password = 'A password must be at least 8 character long.';
  }

  if (!formValues.phone) {
    errors.phone = 'Please provide a valid phone number.';
  }

  return errors;
};

export default reduxForm({
  form: 'signUpForm',
  validate,
})(SignupPage);
