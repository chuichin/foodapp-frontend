import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import classes from './UploadModal.module.css';

const UploadModal = () => {
  const showModal = useSelector(state => state.ui.isUploadModal);

  const uploadModal = useSelector(state => state.uploadModal);

  const dispatch = useDispatch();

  //close modal when the close btn is clicked
  const onCloseBtnClick = () => {
    dispatch({ type: 'HIDE_UPLOAD_MODAL' });
  };

  //close modal when the overlay is clicked
  const onOverlayClick = () => {
    dispatch({ type: 'HIDE_UPLOAD_MODAL' });
  };

  //for dealing with image uploads and live previewing the images
  const onImageFileChange = e => {
    const url = URL.createObjectURL(e.target.files[0]);

    dispatch({ type: 'SET_PREVIEW_IMAGE', payload: url });
    dispatch({ type: 'SET_IMAGE_FILE', payload: e.target.files[0] });
  };

  //upload photo to cloud
  const onUploadBtnClick = () => {
    let formData = new FormData();

    formData.append('image', uploadModal.imageFile);

    //post request to upload image
    //after successful upload, set the images
  };

  const active = showModal ? classes.active : null;

  return ReactDOM.createPortal(
    <div className={`${classes.overlay} ${active}`} onClick={onOverlayClick}>
      <div className={classes.modal} onClick={e => e.stopPropagation()}>
        <div className={classes.btnCloseContainer}>
          <button className={classes.btnClose} onClick={onCloseBtnClick}>
            <FaTimes />
          </button>
        </div>
        <div className={classes.inputContainer}>
          <input
            type="file"
            id="profile_image"
            className={classes.fileInput}
            multiple={false}
            onChange={onImageFileChange}
          />
          <label htmlFor="profile_image" className={classes.btnLabel}>
            Choose a file...
          </label>
          <button className={classes.btnUpload} onClick={onUploadBtnClick}>
            Upload
          </button>
        </div>

        <div className={classes.photoContainer}>
          {uploadModal.previewImage ? (
            <img
              src={uploadModal.previewImage}
              alt="live preview"
              className={classes.image}
            />
          ) : (
            <p className={classes.previewText}>Live preview</p>
          )}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default UploadModal;
