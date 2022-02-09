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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


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
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              aria-label="back to homepage"
              size="large"
            >
              <HomeOutlinedIcon fontSize="inherit" sx={{ fontSize: 40, color: '#9c27b0' }}/>
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Bullietyn Board by Adrian Sadowski
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
