import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../../api";

export default class CreateTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setShow(show) {
    this.setState({ show });
  }

  setTitle(title) {
    this.setState({ title });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const form = {
      task: {
        title: this.state.title,
        done: false
      }
    };

    await api.post("tasks", form).then(res => {
      this.setShow(false);
      this.setTitle("");
      this.props.loadTasks();
    });
  }

  render() {
    return (
      <div>
        <Button
          onClick={e => this.setShow(true)}
          variant="dark"
          className="float-right create_task_btn"
        >
          + Tasks
        </Button>

        <Modal
          show={this.state.show || false}
          onHide={e => this.setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="email"
              placeholder="Enter with your task..."
              value={this.state.title || ""}
              onChange={e => this.setTitle(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={e => this.setShow(false)}>
              Close
            </Button>
            <form onSubmit={this.handleSubmit}>
              <Button variant="dark" type="submit">
                Create
              </Button>
            </form>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
