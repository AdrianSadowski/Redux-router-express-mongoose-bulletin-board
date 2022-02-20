import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {getPostById, fetchPostById} from '../../../redux/postsRedux';
import { withRouter } from '../../../utils/utils';
import {PostContent} from '../../features/PostContent/PostContent';
import styles from './Post.module.scss';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ post, fetchOnePost}) => {

  fetchOnePost();
  console.log(fetchOnePost);


  return (
    <div className={styles.root}>
      {/* <PostContent post={post} /> */}
      <h1>{post.title}</h1>
      <p>{post.author}</p>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object,
  fetchOnePost: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = (state, {router}) => ({
  post: getPostById(state, router.params.id),
});

const mapDispatchToProps = (dispatch, {router}) => ({
  fetchOnePost: () => dispatch(fetchPostById(router.params.id)),
});

const Container = withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
