import {Box, Typography, Card, CardActionArea, Badge} from '@mui/material';

import {Link} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './SmallPost.module.scss';

const Component = ({post}) => (
  //<Badge status={post.status}>
  <Card
    key={post.id}
    raised
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      mb: 4,
    }}
  >
    <CardActionArea component={Link} to={`post/${post.id}`} >
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
    </CardActionArea>
  </Card>
  //</Badge>
);

Component.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    status: PropTypes.string,
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
