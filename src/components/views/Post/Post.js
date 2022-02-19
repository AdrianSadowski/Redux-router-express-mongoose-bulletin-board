import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {getCurrentPost, fetchPostById} from '../../../redux/postsRedux';

import {PostContent} from '../../features/PostContent/PostContent';
import styles from './Post.module.scss';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ post, fetchOnePost}) => {
  React.useEffect(() => {
    fetchOnePost();
  }, [fetchOnePost]);

  return (
    <div className={styles.root}>
      <PostContent post={post} />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object,
  fetchOnePost: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  post: getCurrentPost(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOnePost: () => dispatch(fetchPostById(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
