import React from 'react';
import PropTypes from 'prop-types';
import {addPost} from '../../../redux/postsRedux';
import shortid from 'shortid';
import {connect} from 'react-redux';

import styles from './PostAdd.module.scss';
import {FormPostAdd} from '../../features/FormPostAdd/FormPostAdd';

const Component = ({addNewPost}) => {
  const sendForm = formData => {
    addNewPost({
      ...formData,
      id: shortid(),
      publicationDate: formData.lastUpdate,
    });
  };

  return (
    <div className={styles.root}>
      <FormPostAdd sendForm={sendForm} />
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  addNewPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addNewPost: payload => dispatch(addPost(payload)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  //Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
