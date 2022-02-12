import React from 'react';
import PropTypes from 'prop-types';
import {getUser} from '../../../redux/userRedux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  Button,
} from '@mui/material';

import styles from './PostButtons.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

function Component(isLoggedIn) {
  let buttons;
  if (isLoggedIn.isLoggedIn.logged === true) {
    console.log(`Buttons logged === true`);
    buttons = (
      <div className={styles.root}>
        <Button component={Link} to="/login" variant="contained" size="medium" color="secondary">
          EDIT
        </Button>
        <Button component={Link} to="/login" variant="contained" size="medium" color="secondary">
          DELETE
        </Button>
      </div>
    );
  } else {
    console.log(isLoggedIn);
    buttons = (
      <div className={styles.root}>
        <h4>Only post owner can edit post</h4>
      </div>
    );
  }
  return (
    <>
      {buttons}
    </>
  );
}

Component.propTypes = {
  post: PropTypes.shape({}).isRequired,
  isLoggedIn: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: getUser(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Header,
  Container as PostButtons,
  Component as PostButtonsComponent,
};
