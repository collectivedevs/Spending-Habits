import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
//import dayjs from "dayjs";
//import Axios from "axios";
import TransactionSkeleton from "./transactionSkeleton";
import TransactionTable from "./transactionTable";
import CustomButton from "../../util/customButton";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

// MUI Imports
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { Grid } from "@material-ui/core";

// Icons
import AddCircle from "@material-ui/icons/AddCircle";

// Actions
import { logoutUser } from "../../actions/userAction";
import { getTransactions, createTransaction } from "../../actions/dataAction";

// Context
import { userContext } from "../../contexts/userContext";



const styles = (theme) => ({
  ...theme.styles,
});

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0.0,
      expenseType: "Groceries",
      errors: {},
    };
  }

  // This allows you to use 'this.context'
  static contextType = userContext;

  componentDidMount() {

    const [{}, dispatch] = this.context;

    getTransactions(dispatch);
  }
  

  handleAddTransaction = (event) => {
    event.preventDefault();

    const transactionData = {
      cost: this.state.cost,
      expenseType: this.state.expenseType,
    };

    const [ {}, dispatch ] = this.context;

    createTransaction(transactionData, dispatch);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleRemoveTransaction = () => {};

  handleLogout = () => {
    logoutUser();
  };

  render() {
    const { classes } = this.props;

    const [
      {
        user: {
          credentials: { username, budget, quote, createdAt, imageUrl },
          loading,
          authenticated,
        },
        data: {
          data_loading,
          transactions
        }
      },
    ] = this.context;

    // let profileMarkup = !loading ? (
    //   authenticated ? (
    //     <Paper className={classes.paper}>
    //      <p>{username}</p>
    //     </Paper>
    //   ) : (
    //     <TransactionSkeleton />
    //   )
    // ) : (
    //   <TransactionSkeleton />
    // );

    let profileMarkup = !loading ? (
      <Fragment>
        <Paper className={classes.paper}>
          <div className="createTransaction">
            <Typography variant="h4" className={classes.pageTitle}>
              Create Transaction
            </Typography>
            <form noValidate onSubmit={this.handleAddTransaction}>
              <Grid container spacing={10}>

                <Grid item sm={5} xs={12}>
                  <TextField
                    color="secondary"
                    id="cost"
                    name="cost"
                    type="number"
                    label="Cost"
                    className={classes.TextField}
                    helperText={""}
                    error={false ? true : false}
                    value={this.state.cost}
                    onChange={this.handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item sm={5} xs={12}>
                  <TextField
                    color="secondary"
                    id="expenseType"
                    name="expenseType"
                    label="Expense Type"
                    value={this.state.expenseType}
                    helperText={""}
                    onChange={this.handleChange}
                    error={false ? true : false}
                    className={classes.expenseType}
                    select
                    fullWidth
                  >
                    <MenuItem value="Groceries">Groceries</MenuItem>
                    <MenuItem value="Gym">Gym</MenuItem>
                  </TextField>
                </Grid>
               
              </Grid>
              
              <Grid container spacing={10}>
              <Grid item sm={7} xs={12}>
                <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={data_loading}
            >
              Add Expense
              {data_loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
                </Grid>
                </Grid>
            </form>
          </div>
        </Paper>

        <Paper className={classes.paper}>
          <div className="transactions">
            <TransactionTable data={transactions}/>
          </div>
        </Paper>
      </Fragment>
    ) : (
      <TransactionSkeleton />
    );

    return profileMarkup;
  }
}

export default withStyles(styles)(Transactions);
