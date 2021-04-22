import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import PageContainer from '../containers/PageContainer';
import UploadBtn from '../components/UploadBtn';
import SubmitBtn from '../components/SubmitBtn';
import SelectBtn from '../components/SelectBtn';
import classes from './UpdateChefDetailsPage.module.css';

const UpdateChefDetailsPage = () => {
  //useEffect to fetchData for this page

  const chefDetailPage = useSelector(state => state.chefDetailPage);

  const dispatch = useDispatch();

  const onBtnSelectChange = e => {
    dispatch({
      type: 'SET_CHEFDETAILPAGE_ACTIVE_MENU',
      payload: e.target.value,
    });
  };

  const onTextAreaChange = e => {
    dispatch({
      type: 'UPDATE_CHEFDETAILPAGE_DESCRIPTION',
      payload: e.target.value,
    });
  };

  const onInputChange = (e, type) => {
    dispatch({
      type,
      payload: e.target.value,
    });
  };

  const onUpdateFormSubmit = e => {
    e.preventDefault();

    console.log(chefDetailPage.activeMenu);
    //post this data
  };

  return (
    <PageContainer>
      <div className={classes.selectBtnContainer}>
        <SelectBtn menus={chefDetailPage.menus} onChange={onBtnSelectChange} />
      </div>

      <ul className={classes.imagesList}>
        {chefDetailPage.activeMenu.images.map((img, index) => (
          <li className={classes.imageItem} key={index}>
            <img src={img} alt={`food ${index}`} className={classes.image} />
            <div className={classes.uploadBtnContainer}>
              <UploadBtn task="SET_FOOD_IMAGES" />
            </div>
          </li>
        ))}
      </ul>

      <form className={classes.updateForm}>
        <div className={classes.description}>
          <TextareaAutosize
            minRows="7"
            className={classes.descriptionInput}
            value={chefDetailPage.activeMenu.description}
            onChange={onTextAreaChange}
          />
          <label className={classes.descriptionLabel}>Description:</label>
        </div>

        <ul className={classes.menuList}>
          <h4 className={classes.menuHeading}>Menu</h4>

          {chefDetailPage.activeMenu.menu.map((item, index) => {
            const types = [
              'UPDATE_CHEFDETAILPAGE_APPETIZER',
              'UPDATE_CHEFDETAILPAGE_STARTER',
              'UPDATE_CHEFDETAILPAGE_MAIN',
              'UPDATE_CHEFDETAILPAGE_DESSERT',
            ];

            return (
              <li className={classes.menuCategoryItem} key={index}>
                <input
                  type="text"
                  className={classes.categoryInput}
                  value={item.food}
                  onChange={e => onInputChange(e, types[index])}
                />
                <label className={classes.categoryLabel}>{item.title}</label>
              </li>
            );
          })}
        </ul>

        <div className={classes.submitBtnContainer}>
          <SubmitBtn text="Save Changes" onClick={onUpdateFormSubmit} />
        </div>
      </form>
    </PageContainer>
  );
};

export default UpdateChefDetailsPage;
