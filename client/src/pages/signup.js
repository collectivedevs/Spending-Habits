import React, { Component } from "react";
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
      handle: "",
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
   
  const [ {reducertwo:{errors}} ] = this.context;
  
  if(JSON.stringify(this.state.errors) !== JSON.stringify(errors) && errors !== null){
       
    // Perform some operation here
     this.setState(prevState => ({
         ...prevState,
        errors: {
            email: errors.email,
            password: errors.password
        }
     }));
   }
 }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
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
      handle: this.state.handle
    };
    const [ {reducertwo:{loading}}, dispatch ] = this.context;
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
    const [ {reducertwo:{loading}} ] = this.context;
    const errors = this.state.errors;

    return (
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

            <TextField
              color="secondary"
              id="handle"
              name="handle"
              type="text"
              label="Handle"
              className={classes.TextField}
              helperText={errors.handle}
              error={errors.handle ? true : false}
              value={this.state.handle}
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
    );
  }
}

export default withStyles(styles)(signup);
