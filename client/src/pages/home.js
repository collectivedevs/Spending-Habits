import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Transactions from "../components/transactions/transactions";
import Profile from "../components/profile/profile";
import TransactionSkeleton from "../components/transactions/transactionSkeleton";

// Actions
import { getTransactions } from "../actions/dataAction";

// Context
import { userContext } from "../contexts/userContext";


export class home extends Component {

  // This allows you to use 'this.context'
  static contextType = userContext;

  componentDidMount() {
    const [ , dispatch] = this.context;
    getTransactions(dispatch);
  }

  render() {
    const { loading } = this.context;
    let recentTransactionMarkup = !loading ? (
     <Transactions/>
    ) : (
      <TransactionSkeleton />
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
        {recentTransactionMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile></Profile>
        </Grid>
      </Grid>
    );
  }
}

export default home;
