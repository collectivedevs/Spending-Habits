import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI  Imports
import Paper from "@material-ui/core/Paper";

// Icons

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

const TransactionSkeleton = props => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.profile}>
          <div className="profile-details">
            <hr />
            <div className={classes.fullLine} />
            <div className={classes.fullLine} />
            <div className={classes.fullLine} />
            <div className={classes.fullLine} />
            <div className={classes.fullLine} />
            <div className={classes.fullLine} />
            <div className={classes.fullLine} />
            <div className={classes.fullLine} />
            <hr />
          </div>
        </div>
      </Paper>
    </div>
  );
};


export default withStyles(styles)(TransactionSkeleton);
