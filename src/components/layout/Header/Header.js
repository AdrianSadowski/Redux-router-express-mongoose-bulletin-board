import React from 'react';
import PropTypes from 'prop-types';
import {getUser} from '../../../redux/userRedux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  // FormGroup,
  // FormControlLabel,
  // Switch,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

//import styles from './Header.module.scss';

function Component({className, children, isLoggedIn}) {
  // const [auth, setAuth] = React.useState(true);

  // const handleChange = event => {
  //   setAuth(event.target.checked);
  // };

  // const logout = () => {
  //   handleClose();
  //   //   dispatch(requestLogout());
  // };

  let buttons;
  if (isLoggedIn.logged) {
    buttons = (
      <div>
        <Button variant="contained" size="medium" color="secondary">
          My Items
        </Button>
        <Button variant="contained" size="medium" color="secondary">
          LogOut
        </Button>
      </div>
    );
  } else {
    buttons = (
      <>
        <Button component={Link} to="/login" variant="contained" size="medium" color="secondary">
          LOGIN
        </Button>
      </>
    );
  }

  return (
    <Box sx={{flexGrow: 1}}>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Photos
          </Typography>
          {buttons}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLoggedIn: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: getUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
