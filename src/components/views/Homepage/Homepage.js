import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {SmallPost} from '../SmallPost/SmallPost';

import {Button, Toolbar} from '@mui/material';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, children}) => {
  const [auth] = React.useState(true);
  const posts = useSelector((state) => state.posts.data);

  const concent = {
    title: 'All posts',
    buttonPostAdd: 'Add new post',
    display: 'none',
  };

  if(auth){
    concent.display = 'block';
  } else {
    concent.display = 'none';
  }
  return (
    <div className={clsx(className, styles.root)}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <h2>{concent.title}</h2>
        <Button component={Link} to="/post/add" size="small" variant="outlined" sx={{ display: concent.display }}>
          {concent.buttonPostAdd}
        </Button>
      </Toolbar>
      {posts.map((post) => (
        <SmallPost key={post.id} post={post} ></SmallPost> 
      ))}

    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
