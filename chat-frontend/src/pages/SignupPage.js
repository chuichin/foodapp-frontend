import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageContainer from '../containers/PageContainer';
import TextInput from '../components/TextInput';
import SubmitBtn from '../components/SubmitBtn';
import classes from './SignupPage.module.css';
import logo from '../images/signup.png';
import RadioBtn from '../components/RadioBtn';

const signupInputs = [
  { label: 'name', type: 'SET_SIGNUP_NAME', inputType: 'text' },
  { label: 'email', type: 'SET_SIGNUP_EMAIL', inputType: 'text' },
  { label: 'password', type: 'SET_SIGNUP_PASSWORD', inputType: 'password' },
  { label: 'phone', type: 'SET_SIGNUP_PHONE', inputType: 'text' },
];

const radioBtns = [
  {
    label: 'user',
    value: 'user',
    id: 'user_account_type',
    name: 'account_type',
    dispatchType: 'SET_SIGNUP_ACCOUNT_TYPE',
  },
  {
    label: 'chef',
    value: 'chef',
    id: 'chef_account_type',
    name: 'account_type',
    dispatchType: 'SET_SIGNUP_ACCOUNT_TYPE',
  },
];

const SignupPage = () => {
  const signup = useSelector(state => state.signup);

  const dispatch = useDispatch();

  const onFormSubmit = () => {
    //validate data
    console.log(signup);

    //post data
  };

  return (
    <PageContainer>
      <div className={classes.imageContainer}>
        <img src={logo} alt="girl with cookies" className={classes.logo} />
      </div>

      <h3 className={classes.heading}>
        Don't have an account yet? Sign up here
      </h3>

      <div className={classes.radioBtnContainer}>
        <p className={classes.radioBtnHeading}>Type of account:</p>
        <ul className={classes.radioBtnList}>
          {radioBtns.map(btn => {
            const onRadioBtnClick = e => {
              dispatch({ type: btn.dispatchType, payload: e.target.value });
            };
            return (
              <li className={classes.radioBtnItem}>
                <input
                  type="radio"
                  id={btn.id}
                  name={btn.name}
                  value={btn.value}
                  className={classes.radioBtn}
                  onClick={onRadioBtnClick}
                />
                <label
                  htmlFor={btn.id}
                  className={`${classes.radioLabel} ${
                    signup.accountType === btn.label ? classes.active : null
                  }`}
                >
                  {btn.label}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={classes.listContainer}>
        <ul className={classes.loginList}>
          {signupInputs.map(input => (
            <li className={classes.loginItem} key={input.label}>
              <TextInput {...input} />
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.btnContainer}>
        <SubmitBtn text="Sign Up" onClick={onFormSubmit} />
      </div>
    </PageContainer>
  );
};

export default SignupPage;
