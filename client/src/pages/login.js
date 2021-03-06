import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
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

import Navbar from "../components/layouts/Navbar";

const styles = (theme) => ({
  // We use the styles object in the theme which holds all the styling except palette - https://stackoverflow.com/questions/56897838/getting-a-error-typeerror-color-charat-is-not-a-function-in-c-node-modul
  ...theme.styles,
});

const Link = require("react-router-dom").Link;

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  // This allows you to use 'this.context'
  static contextType = userContext;

  static getDerivedStateFromProps(nextProps, prevState) {
   
    if (nextProps.errors !== prevState.errors) {
      return { errors: prevState.errors };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {

    const [
      {
        ui: { errors },
      },
    ] = this.context;

    if (
      JSON.stringify(this.state.errors) !== JSON.stringify(errors) &&
      errors !== null
    ) {
  
      // Perform some operation here
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          email: errors.email,
          password: errors.password,
          general: errors.general,
        },
      }));
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    const [ , dispatch ] = this.context;

    loginUser(userData, this.props.history, dispatch);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    // classes is for Material Icons to do styling
    const { classes } = this.props;
    const [ {ui: { loading }} ] = this.context;
    const errors = this.state.errors;

    return (
      <Fragment>
      <Navbar />
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
                Dont have an account ? Sign up <Link to="/signup">here</Link>
              </small>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(login);
