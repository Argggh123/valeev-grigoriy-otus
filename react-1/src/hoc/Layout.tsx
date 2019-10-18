import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Towns from "../containers/Towns/Towns";

class Layout extends Component {

  state = {
    drawerOpen: false,
  };

  render() {
    return (
      <div>
        <Header />
        <Towns />
      </div>
    );
  }
}

export default Layout;
