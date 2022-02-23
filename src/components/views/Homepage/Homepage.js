import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAll, fetchAllPosts} from '../../../redux/postsRedux';
import {getUser} from '../../../redux/userRedux';

import {SmallPost} from '../SmallPost/SmallPost';

import {Button, Toolbar} from '@mui/material';

import styles from './Homepage.module.scss';

const Component = ({isLoggedIn, posts, fetchPublishedPosts}) => {
  fetchPublishedPosts();
  const concent = {
    title: 'All posts',
    buttonPostAdd: 'Add new post',
    // posts: { posts &&
    //   posts.filter(post => post.status === 'published')},
    // need create subpage DRAFT posts and MY POSTS
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
      {posts.length && (
        <div className={styles.post}>
          {posts.map(post => (
            <SmallPost key={post._id} post={post}></SmallPost>
          ))}
        </div>
      )}
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
