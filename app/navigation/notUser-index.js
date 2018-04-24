import React, { Component } from "react";
import { createRootNavigator } from "./router";
import { isSignedIn } from "./auth";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkSignedIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
export default Navigation;
