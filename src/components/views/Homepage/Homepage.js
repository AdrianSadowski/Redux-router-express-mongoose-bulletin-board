import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAll} from '../../../redux/postsRedux';
import {getUser} from '../../../redux/userRedux';

import {SmallPost} from '../SmallPost/SmallPost';

import {Button, Toolbar} from '@mui/material';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, posts, isLoggedIn}) => {
  
  const concent = {
    title: 'All posts',
    buttonPostAdd: 'Add new post',
    display: 'none',
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
    <div className={clsx(className, styles.root)}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <h2>{concent.title}</h2>
        {/* {isLoggedIn ? (
          <Button
            component={Link}
            to="/post/add"
            size="small"
            variant="outlined"
            sx={{display: concent.display}}
          >
            {concent.buttonPostAdd}
          </Button>
        ) : null} */}
        {buttonNewPost}
      </Toolbar>
      {posts.map(post => (
        <SmallPost key={post.id} post={post}></SmallPost>
      ))}
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

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
