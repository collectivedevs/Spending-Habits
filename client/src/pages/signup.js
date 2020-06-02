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
import { signupUser } from "../actions/userAction";

import Navbar from "../components/layouts/Navbar";


const styles = theme => ({
  // We use the styles object in the theme which holds all the styling except palette - https://stackoverflow.com/questions/56897838/getting-a-error-typeerror-color-charat-is-not-a-function-in-c-node-modul
  ...theme.styles
});

const Link = require("react-router-dom").Link;

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      firstName: "",
      lastName: "",
      errors: {}
    };
  }

  // This allows you to use 'this.context'
  static contextType = userContext;

  static getDerivedStateFromProps(nextProps, prevState){
      
    if(nextProps.errors!==prevState.errors){

      return { errors: prevState.errors};
   }
   else return null;
 }
 
 componentDidUpdate(prevProps, prevState) {
   
  const [ {ui:{errors}} ] = this.context;
  if(JSON.stringify(this.state.errors) !== JSON.stringify(errors) && errors !== null){
       
    // Perform some operation here
     this.setState(prevState => ({
         ...prevState,
        errors: {
            email: errors.email,
            password: errors.password,
            confirmPassword: errors.confirmPassword,
            username: errors.username,
            firstName: errors.firstName,
            lastName: errors.lastName
        }
     }));
   }
 }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });

    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    const [ {ui:{loading}}, dispatch ] = this.context;
    signupUser(newUserData, this.props.history, dispatch);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
  
    // classes is for Material Icons to do styling
    const { classes } = this.props;
    const [ {ui:{loading}} ] = this.context;
    const errors = this.state.errors;

    return (
      <Fragment>
        <Navbar />
        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid item sm>
            <img src={AppIcon} alt="Logo" className={classes.logo} />
            <Typography variant="h2" className={classes.pageTitle}>
              Sign Up
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>

            <TextField
                color="secondary"
                id="username"
                name="username"
                type="text"
                label="Username"
                className={classes.TextField}
                helperText={errors.username}
                error={errors.username ? true : false}
                value={this.state.username}
                onChange={this.handleChange}
                fullWidth
              />

              <TextField
                color="secondary"
                id="firstName"
                name="firstName"
                type="text"
                label="First Name"
                className={classes.TextField}
                helperText={errors.firstName}
                error={errors.firstName ? true : false}
                value={this.state.firstName}
                onChange={this.handleChange}
                fullWidth
              />

              <TextField
                color="secondary"
                id="lastName"
                name="lastName"
                type="text"
                label="Last Name"
                className={classes.TextField}
                helperText={errors.lastName}
                error={errors.lastName ? true : false}
                value={this.state.lastName}
                onChange={this.handleChange}
                fullWidth
              />

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

              <TextField
                color="secondary"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                className={classes.TextField}
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                value={this.state.confirmPassword}
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
                Signup
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <br></br>
              <small>
                Already have an account ? log in <Link to="/login">here</Link>
              </small>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(signup);
