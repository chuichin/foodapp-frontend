import React from 'react';
import { useSelector } from 'react-redux';
import PageContainer from '../containers/PageContainer';
import UpdateInputField from '../components/UpdateInputField';
import UploadBtn from '../components/UploadBtn';
import CheckBox from '../components/CheckBox';
import classes from './AccountPage.module.css';
import chef2 from '../images/chef2.jpg';
import SubmitBtn from '../components/SubmitBtn';

const details = [
  { label: 'name', type: 'UPDATE_ACCOUNT_USER_NAME' },
  { label: 'email', type: 'UPDATE_ACCOUNT_USER_EMAIL' },
];

const passwords = [
  { label: 'password', type: 'UPDATE_ACCOUNT_PASSWORD' },
  { label: 'new password', type: 'UPDATE_ACCOUNT_NEW_PASSWORD' },
  {
    label: 'confirm new password',
    type: 'UPDATE_ACCOUNT_CONFIRM_NEW_PASSWORD',
  },
];

const categories = [
  { type: 'WESTERN_TYPE', value: 'western', label: 'Western' },
  { type: 'MALAYSIAN_TYPE', value: 'malaysian', label: 'Malaysia' },
  { type: 'CHINESE_TYPE', value: 'chinese', label: 'Chinese' },
  { type: 'HALAL_TYPE', value: 'halal', label: 'Halal' },
  { type: 'JAPANESE_TYPE', value: 'japanese', label: 'Japanese' },
  { type: 'KOREAN_TYPE', value: 'korean', label: 'Korean' },
  { type: 'ITALIAN_TYPE', value: 'italian', label: 'Italian' },
  { type: 'THAI_TYPE', value: 'thai', label: 'Thai' },
  { type: 'INDIAN_TYPE', value: 'indian', label: 'Indian' },
  { type: 'FRENCH_TYPE', value: 'french', label: 'French' },
];

const AccountPage = () => {
  const updateForm = useSelector(state => state.updateAccount);

  const userRole = useSelector(state => state.ui.userRole);

  const onDetailFormSubmit = e => {
    e.preventDefault();
    console.log(updateForm);
  };

  const onPasswordFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      <h2 className={classes.heading}>Your Account</h2>

      <div className={classes.imageContainer}>
        <img src={chef2} alt="spencer" className={classes.profileImage} />

        <div className={classes.uploadContainer}>
          <UploadBtn task="SET_PROFILE_IMAGE" />
        </div>
      </div>

      <form className={classes.detailForm} onSubmit={onDetailFormSubmit}>
        <ul className={classes.detailsList}>
          {details.map((detail, index) => (
            <li className={classes.detailItem} key={index}>
              <UpdateInputField {...detail} />
            </li>
          ))}
        </ul>

        {userRole === 'chef' ? (
          <div className={classes.categoriesContainer}>
            <h4 className={classes.categoriesHeading}>Categories:</h4>
            <ul className={classes.categoriesList}>
              {categories.map((category, index) => (
                <li className={classes.categoryItem} key={index}>
                  <CheckBox {...category} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}

        <div className={classes.btnContainer}>
          <SubmitBtn text="Update" />
        </div>
      </form>

      <h3 className={classes.passwordHeading}>Update Password</h3>

      <form className={classes.detailForm} onSubmit={onPasswordFormSubmit}>
        <ul className={classes.detailsList}>
          {passwords.map((password, index) => (
            <li className={classes.detailItem} key={index}>
              <UpdateInputField {...password} />
            </li>
          ))}
        </ul>

        <div className={classes.btnContainer}>
          <SubmitBtn text="Update Password" />
        </div>
      </form>
    </PageContainer>
  );
};

export default AccountPage;
