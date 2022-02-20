import {Box, Typography, Card, CardActionArea} from '@mui/material';

import React from 'react';
import PropTypes from 'prop-types';

const Component = ({post}) => (
  <Card 
    key={post._id}
    raised
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      mb: 4,
    }}
  >
    <CardActionArea href={`/post/${post._id}`} >
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
);

Component.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};


export {
  Component as SmallPost,
  // Container as SmallPost,
  Component as SmallPostComponent,
};
