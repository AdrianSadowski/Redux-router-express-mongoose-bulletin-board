import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {connect} from 'react-redux';
import {addPost} from '../../../redux/postsRedux';
import {getUserData} from '../../../redux/userRedux';
import { formatDate } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';

import {Grid, TextField, Box, Button} from '@mui/material';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './FormPostAdd.module.scss';

function Component({className, children, addNewPost, userData}) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const today = formatDate.DDMMYYYY(new Date());
    const newID = shortid();

    addNewPost({
      id: newID,
      title,
      description,
      publicationDate: today,
      lastUpdate: today,
      author: {
        id: userData.id,
        email: userData.id,
      },
      status: event.target.id,
      price,
      location,
    });

    navigate(`/post/${newID}`, {state: {prevAction: `Post ${title} has been added`}});
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
              onChange={e => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              required
              label="Post description"
              multiline
              rows={4}
              fullWidth
              onChange={e => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Price" fullWidth onChange={e => setPrice(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Location" fullWidth onChange={e => setLocation(e.target.value)} />
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} variant="contained" id="draft">
              Save draft
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} variant="contained" id="published">
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
