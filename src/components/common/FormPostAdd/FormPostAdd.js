import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {connect} from 'react-redux';
import {addPost} from '../../../redux/postsRedux';
import {getUserData} from '../../../redux/userRedux';

import {Grid, TextField, Box, Button} from '@mui/material';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './FormPostAdd.module.scss';

function Component({className, children, addNewPost, userData}) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();

  const handleSubmit = event => {
    event.preventDefault();

    addNewPost({
      id: shortid(),
      title,
      content,
      author: userData.id,
      status: 'draft',
      price,
      location,
    });
  };

  return (
    <div className={styles.root}>
      <h2>Add post</h2>
      <Box component="form" noValidate className={styles.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              required 
              label="Post title" 
              fullWidth 
              autoFocus 
              onChange={(e) => setTitle(e.target.value)}  
            />
          </Grid>
          <Grid item xs={12}>
            <TextField required label="Post description" fullWidth onChange={(e) => setContent(e.target.value)}  />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Price" fullWidth  onChange={(e) => setPrice(e.target.value)}  />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Location" fullWidth onChange={(e) => setLocation(e.target.value)}  />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
              Add Post
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  addNewPost: PropTypes.func.isRequired,
  userData: PropTypes.shape({id: PropTypes.string}).isRequired,
};

const mapStateToProps = state => ({
  userData: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  addNewPost: payload => dispatch(addPost(payload)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as FormPostAdd,
  Container as FormPostAdd,
  Component as FormPostAddComponent,
};
