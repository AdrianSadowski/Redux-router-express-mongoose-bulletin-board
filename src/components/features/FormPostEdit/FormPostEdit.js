import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {formatDate} from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';

import {Grid, TextField, Box, Button} from '@mui/material';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './FormPostEdit.module.scss';

function Component({post, sendForm}) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const {author, id, publicationDate} = post;
    const today = formatDate.DDMMYYYY(new Date());
    sendForm({
      id,
      publicationDate,
      title,
      description,
      price,
      location,
      author,
      lastUpdate: today,
      status: event.target.id,
    });

    navigate(`/post/${id}`, {state: {prevAction: `Post ${title} has been changed`}});
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
  sendForm: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.shape({
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
    }).isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export {
  Component as FormPostEdit,
  //Container as FormPostEdit,
  Component as FormPostEditComponent,
};
