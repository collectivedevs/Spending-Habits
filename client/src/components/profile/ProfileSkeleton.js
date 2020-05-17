import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import NoImg from "../../images/no-img.png";

// MUI  Imports
import Paper from "@material-ui/core/Paper";

// Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";

const styles = theme => ({
  ...theme.styles,
  handle: {
    height: 20,
    backgroundColor: theme.palette.primary.main,
    width: 60,
    margin: "0 auto 7px auto"
  },
  fullLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    marginBottom: 10
  },
  halfLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "50%",
    marginBottom: 10
  }
});

const ProfileSkeleton = props => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.profile}>
          <div className="image-wrapper">
            <img src={NoImg} alt="profile" className="profile-image" />
          </div>
          <hr />
          <div className="profile-details">
            <div className={classes.handle} />
            <hr />
            <div className={classes.fullLine} />
            <div className={classes.fullLine} />
            <hr />
            <LocationOn color="primary" />
            <span>Life Quote</span>
            <hr />
            <LinkIcon color="primary" /> <span> Budget $ </span>
            <hr />
            <CalendarToday color="primary" /> <span>Joined Date</span>
          </div>
        </div>
      </Paper>
    </div>
  );
};

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileSkeleton);
