import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import List from "./list/List";
import api from "../../api.js";
import CreateTasks from "./create_tasks/CreateTasks";

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.loadTasks = this.loadTasks.bind(this);
  }

  componentDidMount() {
    this.loadTasks();
  }

  async loadTasks() {
    await api.get("tasks").then(res => {
      const tasks = res.data;

      this.setState({ tasks: tasks });
    });
  }

  render() {
    return (
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">To-do</p>
          <List
            loadTasks={this.loadTasks}
            tasks={this.state.tasks.filter(task => task.done === false)}
          />
          <CreateTasks loadTasks={this.loadTasks} />
        </Col>
        <Col xs={{ span: 8, offset: 2 }} className="tasks_list">
          <p className="title">Done</p>
          <List
            loadTasks={this.loadTasks}
            tasks={this.state.tasks.filter(task => task.done === true)}
          />
        </Col>
      </Row>
    );
  }
}
