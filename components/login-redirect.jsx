import Router from "next/router";
import React, { Component } from "react";

import Layout from "../components/Layout";
import createLoginUrl from "../utils/url-helper";

export default class RedirectToLogin extends Component {
  componentDidMount() {
    window.location.assign(createLoginUrl(Router.pathname));
    console.log(Router.pathname);
  }

  render() {
    return (
      <Layout>
        <div className="">Signing you in...</div>
      </Layout>
    );
  }
}
