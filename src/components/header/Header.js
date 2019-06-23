import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Brand>
            <FontAwesomeIcon icon="check-circle" size="lg" /> Task Finisher
          </Navbar.Brand>
        </Navbar>
      </header>
    );
  }
}
