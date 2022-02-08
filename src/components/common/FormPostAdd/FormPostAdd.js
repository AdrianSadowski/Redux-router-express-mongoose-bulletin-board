import React from 'react';
import PropTypes from 'prop-types';

import {Grid, TextField, Box, Button} from '@mui/material';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './FormPostAdd.module.scss';

function Component({className, children}) {


  return (
    <div className={styles.root}>
      <h2>Add post</h2>
      <Box component="form" noValidate className={styles.form} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Post title"
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Post content"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Price" fullWidth  />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Location" fullWidth />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
              Add Post
            </Button>
          </Grid>
        </Grid>
      </Box>
      {children}
    </div>
  );
}

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
  Component as FormPostAdd,
  // Container as FormPostAdd,
  Component as FormPostAddComponent,
};
