import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {getPost, fetchPostById} from '../../../redux/postsRedux';
import {PostContent} from '../../features/PostContent/PostContent';
import styles from './Post.module.scss';


const Component =  ({title, post, fetchOnePost}) =>  {
  console.log(post);

  fetchOnePost();

  return (
    <div className={styles.root}>
      {/* <PostContent post={post} /> */}
      {/* <h1> {post.title}</h1> */}

    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  fetchOnePost: PropTypes.func,
  params: PropTypes.object,
  post: PropTypes.object.isRequired,
  title: PropTypes.string,
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
