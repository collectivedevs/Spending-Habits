// import React from 'react';

// const home = () => {
//     const  = useContext(userContext);
 
//     if (token) {
  
//       // DecodedToken stores when the token will expire along with details about the user and the token
//       const decodedToken = jwtDecode(token);
    
//       if (decodedToken.exp * 1000 < Date.now()) {
//         window.location.href = "/login";
//         logoutUser();
//       } else {
//         dispatch({ type: SET_AUTHENTICATED });
//         Axios.defaults.headers.common["Authorization"] = token;
        
//       }
//     }
//     return <div>Hello World</div>;
// };

// export default home;

import React, { Component, Fragment } from "react";
import jwtDecode from "jwt-decode";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import Axios from "axios";
//import EditDetails from "./EditDetails";
import CustomButton from "../util/customButton";
import ProfileSkeleton from "../util/ProfileSkeleton";

// MUI Imports
import Button from "@material-ui/core/Button";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

// Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";

import {SET_AUTHENTICATED} from "../types";

// Actions
import {logoutUser} from "../actions/userAction";

// Context
import { userContext } from "../contexts/userContext";



const styles = theme => ({
  ...theme.styles
});

const Link = require("react-router-dom").Link;

class Profile extends Component {

  // This allows you to use 'this.context'
  static contextType = userContext;

  componentWillMount() {
    const [ {}, dispatch ] = this.context;
    const token = localStorage.FBIdToken;

    if (token) {
  
              // DecodedToken stores when the token will expire along with details about the user and the token
              const decodedToken = jwtDecode(token);
            
              if (decodedToken.exp * 1000 < Date.now()) {
                window.location.href = "/login";
                logoutUser();
              } else {
                dispatch({ type: SET_AUTHENTICATED });
                Axios.defaults.headers.common["Authorization"] = token;
                
              }
            }

  }

  handleImageChange = event => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const { classes } = this.props;

    const [{ user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated
      }}] = this.context;

    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper}>
          <div className={classes.profile}>
            <div className="image-wrapper">
              <img src={imageUrl} alt="profile" className="profile-image" />
              <input
                type="file"
                id="imageInput"
                onChange={this.handleImageChange}
                hidden="hidden"
              />

              <CustomButton
                tip="Edit profile picture"
                onClick={this.handleEditPicture}
                btnClassName="button"
              >
                <EditIcon color="primary"></EditIcon>
              </CustomButton>
            </div>
            <hr />
            <div className="profile-details">
              <MuiLink
                component={Link}
                to={`/users/${handle}`}
                color="primary"
                variant="h5"
              >
                @{handle}
              </MuiLink>
              <hr />
              {bio && <Typography variant="body2">{bio}</Typography>}
              <hr />
              {location && (
                <Fragment>
                  <LocationOn color="primary" /> <span>{location}</span>
                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <LinkIcon color="primary" />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {" "}
                    {website}
                  </a>
                  <hr />
                </Fragment>
              )}
              <CalendarToday color="primary" />{" "}
              <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
            </div>

            <CustomButton tip="Logout" onClick={this.handleLogout}>
              <KeyboardReturn color="primary" />
            </CustomButton>

          </div>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Typography variant="body2" align="center">
            No profile found, please login again
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/signup"
            >
              Signup
            </Button>
          </div>
        </Paper>
      )
    ) : (
      <ProfileSkeleton />
    );

    return profileMarkup;
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
