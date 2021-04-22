import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageContainer from '../containers/PageContainer';
import TextInput from '../components/TextInput';
import SubmitBtn from '../components/SubmitBtn';
import classes from './LoginPage.module.css';
import logo from '../images/login.png';

const loginInputs = [
  { label: 'email', type: 'SET_LOGIN_EMAIL', inputType: 'text' },
  { label: 'password', type: 'SET_LOGIN_PASSWORD', inputType: 'password' },
];

const LoginPage = () => {
  const login = useSelector(state => state.login);

  const dispatch = useDispatch();

  const onLoginFormSubmit = () => {
    //validate data
    console.log(login);

    //post data
  };

  return (
    <PageContainer>
      <div className={classes.imageContainer}>
        <img src={logo} alt="girl with cookies" className={classes.logo} />
      </div>

      <h3 className={classes.heading}>Hello Again! Welcome Back</h3>

      <div className={classes.listContainer}>
        <ul className={classes.loginList}>
          {loginInputs.map(input => (
            <li className={classes.loginItem} key={input.label}>
              <TextInput {...input} />
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.btnContainer}>
        <SubmitBtn text="Log In" onClick={onLoginFormSubmit} />
      </div>
    </PageContainer>
  );
};

export default LoginPage;
