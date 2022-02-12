import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {getPostById} from '../../../redux/postsRedux';
import {withRouter} from '../../../utils/utils';

import {PostContent} from '../../features/PostContent/PostContent';
import styles from './Post.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ( {post} ) => (
  <div className={styles.root}>
    <PostContent post={post} />
  </div>
);

Component.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state, {router}) => ({
  post: getPostById(state, router.params.id),
});

const Container = withRouter(connect(mapStateToProps)(Component));

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
