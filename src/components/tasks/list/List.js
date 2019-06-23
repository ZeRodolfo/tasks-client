import React, { Component, Fragment } from "react";
import { Card, Table, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../../../api.js'

export default class List extends Component {
  
  async deleteTask(task) {
    if (window.confirm(`Você realmente deseja excluir o item: ${task.title}?`)) {
      await api.delete(`tasks/${task.id}`).then(res => {
        this.props.loadTasks();
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Card>
          <Card.Body>
            <Table responsive>
              <tbody>
                {this.props.tasks.map((task, index) => {
                  return <tr key={task.id}>
                    <td className="col-md-10">{task.title}</td>
                    <td>
                      {
                        task.done === false ?
                          <a className="check" href="#">
                            <FontAwesomeIcon icon="check-circle" />
                          </a>
                        : null
                      }
                    </td>
                    <td>
                      <a className="delete" href="#" onClick={() => this.deleteTask(task)}>
                        <FontAwesomeIcon icon="trash-alt" />
                      </a>
                    </td>
                  </tr>;
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}
