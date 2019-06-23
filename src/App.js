import React, { Component, Fragment } from "react";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import Tasks from "./components/tasks/Tasks";

library.add(faCheckCircle, faTrashAlt);

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <Tasks />
        </Container>
      </Fragment>
    );
  }
}

export default App;
