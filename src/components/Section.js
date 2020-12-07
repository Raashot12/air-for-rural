import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";




export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
      </section>
    );
  }
}

export default Section;
