import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/logo192.png";

// MUI Imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

// Context
import { userContext } from "../contexts/userContext";

// Actions
import { loginUser } from "../actions/userAction";

const styles = theme => ({
  // We use the styles object in the theme which holds all the styling except palette - https://stackoverflow.com/questions/56897838/getting-a-error-typeerror-color-charat-is-not-a-function-in-c-node-modul
  ...theme.styles
});

const Link = require("react-router-dom").Link;

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",

      errors: {}
    };
  }

  // This allows you to use 'this.context'
  static contextType = userContext;

  // TO-DO REFACTOR TO WORK WITH CONTEXT API

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.state.UI.errors });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit called");
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    const [ {reducertwo:{loading}}, dispatch ] = this.context;
    console.log("dispatch has " + JSON.stringify(dispatch));
    loginUser(userData, this.props.history)(dispatch);
    console.log("loginUser called");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // classes is for Material Icons to do styling
    const { classes } = this.props;
    const [ {reducertwo:{loading}} ] = this.context;
    console.log(`loading is ${loading}`);
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt="Logo" className={classes.logo} />
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              color="secondary"
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.TextField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              color="secondary"
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.TextField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />

            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br></br>
            <small>
              dont have an account ? Sign up <Link to="/signup">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

// You can use prop-types to document the intended types of properties passed to components.
login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

// This lets redux know the data that this page would need from state
// const mapStateToProps = state => ({
//   user: state.user,
//   UI: state.UI
// });

export default withStyles(styles)(login);
