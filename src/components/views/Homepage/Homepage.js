import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAll, fetchAllPosts, getLoadingState} from '../../../redux/postsRedux';
import {getUser} from '../../../redux/userRedux';
import {useDispatch, useSelector} from 'react-redux';

import {SmallPost} from '../SmallPost/SmallPost';

import {Button, Toolbar} from '@mui/material';

import styles from './Homepage.module.scss';

const Component = ({isLoggedIn, posts, fetchPublishedPosts}) => {
  // React.useEffect(() => {
  //   fetchPublishedPosts();
  // }, []);
  // const [posts, setPosts] = useState([]);
  // const dispatch = useDispatch();
  // const allPosts = useSelector(state => getAll(state));
  // const loadingState = useSelector(state => getLoadingState(state));

  // useEffect(() => {
  //   const {active, error} = loadingState;
  //   if (!active && !error) {
  //     dispatch(fetchAllPosts());
  //     setPosts(allPosts);
  //   }
  // }, [loadingState]);
  fetchPublishedPosts();
  const concent = {
    title: 'All posts',
    buttonPostAdd: 'Add new post',
    posts: posts.filter(post => post.status === 'published'),
  };

  let buttonNewPost;
  if (isLoggedIn.logged) {
    console.log(`isLoggedIn.logged === true`);
    buttonNewPost = (
      <Button
        component={Link}
        to="/post/add"
        size="small"
        variant="outlined"
        sx={{display: 'block'}}
      >
        {concent.buttonPostAdd}
      </Button>
    );
  } else {
    console.log(`isLoggedIn.logged === false`);
    buttonNewPost = (
      <Button
        component={Link}
        to="/post/add"
        size="small"
        variant="outlined"
        sx={{display: 'none'}}
      >
        {concent.buttonPostAdd}
      </Button>
    );
  }
  return (
    <div className={styles.root}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <h2>{concent.title}</h2>
        {buttonNewPost}
      </Toolbar>
      <div className={styles.post}>
        {concent.posts.map(post => (
          <SmallPost key={post._id} post={post}></SmallPost>
        ))}
      </div>
    </div>
  );
};

Component.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  isLoggedIn: PropTypes.object.isRequired,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLoggedIn: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchAllPosts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
