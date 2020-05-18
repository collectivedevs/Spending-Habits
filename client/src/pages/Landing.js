import React, { Component, Fragment } from "react";
import TopNav from "../components/layouts/TopNav";
import DescriptionFeatures from "../components/layouts/DescriptionFeatures";
import Developers from "../components/layouts/Developers";

class Landing extends Component {

  render() {
    return (
      <Fragment>
        <TopNav />
        <DescriptionFeatures />
        <Developers />
      </Fragment>
    );
  }
}

export default Landing;
