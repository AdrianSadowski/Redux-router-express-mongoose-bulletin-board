import React from 'react';
import PropTypes from 'prop-types';
import {fetchAddPost} from '../../../redux/postsRedux';
import {getUserData} from '../../../redux/userRedux';
// import shortid from 'shortid';
import {connect} from 'react-redux';

import styles from './PostAdd.module.scss';
import {FormPostAdd} from '../../features/FormPostAdd/FormPostAdd';

const Component = ({addNewPost, userData}) => {
  const sendForm = formData => {
    addNewPost({
      ...formData,
      author: userData.email,
      publicationDate: formData.lastUpdate,
    });
  };

  return (
    <div className={styles.root}>
      <FormPostAdd addNewPost={sendForm} />
    </div>
  );
};

Component.propTypes = {
  userData: PropTypes.shape({email: PropTypes.string}).isRequired,
  addNewPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userData: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  addNewPost: payload => dispatch(fetchAddPost(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
