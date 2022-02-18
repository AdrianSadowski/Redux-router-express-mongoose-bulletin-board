import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAll , fetchAllPosts} from '../../../redux/postsRedux';
import {getUser} from '../../../redux/userRedux';

import {SmallPost} from '../SmallPost/SmallPost';

import {Button, Toolbar} from '@mui/material';

import styles from './Homepage.module.scss';

const Component = ({className, posts, isLoggedIn}) => {
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
          <SmallPost key={post.id} post={post}></SmallPost>
        ))}

      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  isLoggedIn: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLoggedIn: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
