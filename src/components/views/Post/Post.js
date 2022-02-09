import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Badge,
  Card,
  CardMedia,
  CardContent,
  Typography,
  ListItem,
  List,
} from '@mui/material';

import styles from './Post.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
const data = {
  author: {
    email: 'sadow.adrian@gmail.com',
  },
  status: 'staus',
  title: 'title',
  publicationDate: 'publicationDate',
  lastUpdate: 'lastUpdateDate',
  location: 'location',
  price: '2000',
  content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
};

const Component = () => (
  <Badge status={data.status}>
    <Card className={styles.root}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" p={2}>
              {data.title}
              <Typography variant="body2" color="text.secondary">
                {`published ${data.publicationDate} ${data.location || ''}`}
              </Typography>
            </Typography>
            {data.price ? (
              <Typography variant="h4" p={2}>
                {data.price} pln
              </Typography>
            ) : null}
          </Box>
          <CardContent sx={{flexGrow: 1}}>{data.content}</CardContent>
          <List className={styles.captions}>
            <ListItem>
              <Typography variant="caption">Contact: {data.author.email}</Typography>
            </ListItem>
            <ListItem> 
              <Typography variant="caption">Last Update: {data.lastUpdate}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <CardMedia component="img" src={data.image} alt="Post image example" />
        </Grid>
      </Grid>
    </Card>
  </Badge>
);

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
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
