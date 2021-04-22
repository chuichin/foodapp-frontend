import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import TextareaAutosize from 'react-textarea-autosize';
import PageContainer from '../containers/PageContainer';
import TextInput from '../components/TextInput';
import RadioBtn from '../components/RadioBtn';
import SubmitBtn from '../components/SubmitBtn';
import classes from './ProposalPage.module.css';
import logo from '../images/chefhat.png';
import proposalQuestion from '../utils/proposalQuestion';

const details = [
  { label: 'name', type: 'SET_PROPOSAL_USER_NAME', inputType: 'text' },
  { label: 'email', type: 'SET_PROPOSAL_USER_EMAIL', inputType: 'text' },
  { label: 'phone', type: 'SET_PROPOSAL_USER_PHONE', inputType: 'text' },
];

const ProposalPage = () => {
  const proposalForm = useSelector(state => state.proposalForm);

  const dispatch = useDispatch();

  const onCalendarClick = (value, event) => {
    dispatch({ type: 'SET_PROPOSAL_DATE', payload: value });
  };

  const onTextAreaChange = e => {
    dispatch({ type: 'SET_PROPOSAL_MESSAGE', payload: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();

    console.log(proposalForm);

    //check data submitted  (is it complete)
    //if false, notify user (use toast)
    //post data to api
  };

  const renderQuestions = () => {
    return proposalQuestion.map((qns, index) => (
      <li className={classes.questionItem} key={index}>
        <h4 className={classes.questionHeading}>{qns.title}</h4>
        <ul className={classes.optionList}>
          {qns.choices.map(choice => (
            <li className={classes.optionItem} key={choice.id}>
              <RadioBtn {...choice} />
            </li>
          ))}
        </ul>
      </li>
    ));
  };

  return (
    <PageContainer>
      <div className={classes.header}>
        <img src={logo} alt="Chef Hat Logo" className={classes.logo} />
        <h2 className={classes.headerHeading}>Your Proposal Form</h2>
      </div>

      <form onSubmit={onFormSubmit}>
        <div className={classes.addressContainer}>
          <TextInput
            label="address"
            type="SET_PROPOSAL_ADDRESS"
            inputType="text"
          />
        </div>

        <ul className={classes.questionList}>{renderQuestions()}</ul>

        <div className={classes.calendarContainer}>
          <h3 className={classes.calendarHeading}>Calendar</h3>
          <Calendar onChange={onCalendarClick} />
        </div>

        <div className={classes.textareaContainer}>
          <h3 className={classes.textareaHeading}>
            Anything else to let the chef know
          </h3>
          <TextareaAutosize
            minRows="5"
            className={classes.textarea}
            onChange={onTextAreaChange}
          />
        </div>

        <div className={classes.detailsContainer}>
          <h4 className={classes.detailHeading}>
            Please confirm your personal details
          </h4>
          <ul className={classes.inputList}>
            {details.map(detail => (
              <li key={detail.label} className={classes.inputItem}>
                <TextInput {...detail} />
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.btnContainer}>
          <SubmitBtn text="Send Proposal" />
        </div>
      </form>
    </PageContainer>
  );
};

export default ProposalPage;
