import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
import CustomButton from "../../util/customButton";

// MUI Imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// Icons
import HomeIcon from "@material-ui/icons/Home";

const Link = require("react-router-dom").Link;

class Navbar extends Component {
  render() {
    const { authenticated } = this.props;

    const buttonText = {
      color: '#FFF',
      fontSize: '15px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      textShadow: '0px 1px 2px #000',
    };

    return (
      <AppBar className="appbar-gradient">
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>

              <Link to="/">
                <CustomButton tip="Home">
                  <HomeIcon />
                </CustomButton>
              </Link>

            </Fragment>
          ) : (
            <Fragment>
              <Button style={buttonText} component={Link} to="/">
                Home
              </Button>
              <Button style={buttonText} component={Link} to="/login">
                Login
              </Button>
              <Button style={buttonText} component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}


// Navbar.propTypes = {
//   authenticated: PropTypes.bool.isRequired
// };



export default Navbar;
