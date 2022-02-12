import React from 'react';
import PropTypes from 'prop-types';
import {getUser} from '../../../redux/userRedux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

import styles from './PostButtons.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

function Component({post, isLoggedIn}) {
  
  let buttons;
  if (isLoggedIn.logged === true) {

    if(isLoggedIn.id === post.author.id || isLoggedIn.role === 'admin' ){

      buttons = (
        <div className={styles.root}>
          <Button
            component={Link}
            to={`/post/${post.id}/edit`}
            variant="outlined"
            size="medium"
            color="secondary"
          >
            EDIT
          </Button>
          <Button component={Link} to="/login" variant="outlined" size="medium" color="secondary">
            DELETE
          </Button>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
  return (
    <>
      {buttons}
    </>
  );
}

Component.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  isLoggedIn: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: getUser(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as PostButtons,
  Container as PostButtons,
  Component as PostButtonsComponent,
};
