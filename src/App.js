import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header/Header";

library.add(faCheckCircle, faTrashAlt);

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export default App;
