import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {getPost, fetchPostById} from '../../../redux/postsRedux';
import {PostContent} from '../../features/PostContent/PostContent';
import styles from './Post.module.scss';


const Component =  ({post, fetchOnePost}) =>  {
  console.log(post);

  fetchOnePost();

  return (
    <div className={styles.root}>
      {post && <PostContent post={post} />}

    </div>
  );
};

Component.propTypes = {
  post: PropTypes.object.isRequired,
  className: PropTypes.string,
  params: PropTypes.object,
  fetchOnePost: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  post: getPost(state),
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
