import React from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getPostById, updatePost} from '../../../redux/postsRedux';

import styles from './PostEdit.module.scss';
import {FormPostEdit} from '../../features/FormPostEdit/FormPostEdit';

const Component = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => getPostById(state, id));
  const editPost = payload => dispatch(updatePost(payload));
  const sendForm = formData => {
    editPost({
      ...formData,
      id,
    });
  };
  return (
    <div className={styles.root}>
      <h2>PostEdit {post.title}</h2>
      <FormPostEdit sendForm={sendForm} post={post} />
    </div>
  );
};

Component.propTypes = {};

export {
  Component as PostEdit,
  // Container as PostEdit,
  Component as PostEditComponent,
};
