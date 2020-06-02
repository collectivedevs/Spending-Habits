import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import Axios from "axios";
//import EditDetails from "./EditDetails";
import CustomButton from "../../util/customButton";
import ProfileSkeleton from "./ProfileSkeleton";

// MUI Imports
import Button from "@material-ui/core/Button";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

// Icons
import CalendarToday from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";
import MoneyIcon from "@material-ui/icons/AttachMoney";

import { SET_AUTHENTICATED } from "../../types";

// Actions
import { logoutUser, getUserData, uploadImage } from "../../actions/userAction";

// Context
import { userContext } from "../../contexts/userContext";

const styles = (theme) => ({
  ...theme.styles,
});

const Link = require("react-router-dom").Link;

class Profile extends Component {
  // This allows you to use 'this.context'
  static contextType = userContext;

  componentDidMount() {
    const [ , dispatch] = this.context;
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
        
        getUserData(dispatch);
        
      }
    }
  }

  handleImageChange = (event) => {
    const [ , dispatch] = this.context;
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    uploadImage(formData, dispatch);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  handleLogout = () => {
    const [ , dispatch] = this.context;
    logoutUser(dispatch);
  };

  render() {
    const { classes } = this.props;

    const [
      {
        user: {
          credentials: {
            username,
            budget,
            createdAt,
            imageUrl,
          },
          loading,
          authenticated,
        },
      },
    ] = this.context;

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
                to={`/users/${username}`}
                color="primary"
                variant="h5"
              >
                @{username}
              </MuiLink>
             
            <hr />
            <MoneyIcon color="primary" /> <span> Budget : {budget && <Typography variant="body2">{budget}</Typography>} </span>
            <hr />
            <CalendarToday color="primary" />  <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
     
          
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

export default withStyles(styles)(Profile);
