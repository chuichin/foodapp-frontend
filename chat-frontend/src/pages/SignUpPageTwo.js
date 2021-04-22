import React from 'react';
import PageContainer from '../containers/PageContainer';
import classes from './SignupPageTwo.module.css';
import logo from '../images/chefSignup.png';

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

const ChefSignUpPage = () => {
  return (
    <PageContainer>
      <div>signuppagetwo</div>
    </PageContainer>
  );
};

export default ChefSignUpPage;
