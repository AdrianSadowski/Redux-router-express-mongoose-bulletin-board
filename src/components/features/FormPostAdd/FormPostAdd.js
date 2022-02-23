import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {formatDate} from '../../../utils/utils';
import {Grid, TextField, Box, Button} from '@mui/material';
import styles from './FormPostAdd.module.scss';

function Component({addNewPost}) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    const today = formatDate.DDMMYYYY(new Date());

    addNewPost({
      title,
      description,
      publicationDate: today,
      lastUpdate: today,
      status: event.target.id,
      price,
      location,
    });

    // navigate(`/post/${newID}`, {state: {prevAction: `Post ${title} has been added`}});
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
  addNewPost: PropTypes.func.isRequired,
  // userData: PropTypes.shape({email: PropTypes.string}).isRequired,
};

Component.defaultProps = {
  post: {
    author: '',
    publicationDate: null,
    lastUpdate: null,
    status: null,
    title: '',
    description: '',
    photo: null,
    price: null,
    phone: null,
    location: '',
  },
};

// const mapStateToProps = state => ({
//   userData: getUserData(state),
// });

// const mapDispatchToProps = dispatch => ({
//   addNewPost: payload => dispatch(addPost(payload)),
// });

// const Container = connect(mapStateToProps)(Component);

export {
  Component as FormPostAdd,
  //Container as FormPostAdd,
  Component as FormPostAddComponent,
};
