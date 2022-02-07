
import { Box, Typography } from '@mui/material';

import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './SmallPost.module.scss';

const Component = ({ post }) => (
  <div className={styles.root}>
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography variant="h6" p={2}>
        {post.title}
      </Typography>
      {post.price ? (
        <Typography variant="h6" p={2}>
          {post.price} pln
        </Typography>
      ) : null}
    </Box>
  </div>
);

Component.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
  }).isRequired,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as SmallPost,
  // Container as SmallPost,
  Component as SmallPostComponent,
};