import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {tasksActions} from "../../changers/tasks/actions";

const mapDispatchToProps = (dispatch) => ({
  tasksActions: bindActionCreators({...tasksActions}, dispatch)
})

class CreateTaskForm extends Component {
  static defaultProps = {};
  
  static propTypes = {};
  
  state = {
    username: '',
    email: '',
    text: ''
  };
  
  handleUsernameChange = (ev) =>
    this.setState({ username: ev.target.value })
  
  handleEmailChange = (ev) =>
    this.setState({ email: ev.target.value })
  
  handleTaskChange = (ev) =>
    this.setState({ text: ev.target.value })
  
  confirmCreateTask = () => {
    const {username, email, text} = this.state
    if (username && email && text)
      this.props.tasksActions.addNewTask(username, email, text)
  }
  
  render() {
    const {username, email, text} = this.state
    
    return (
      <>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="enter username"
                onChange={this.handleUsernameChange}
                value={username}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="enter e-mail"
                onChange={this.handleEmailChange}
                value={email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="text">Task</Label>
              <Input
                type="textarea"
                name="text"
                id="text"
                placeholder="enter task text"
                onChange={this.handleTaskChange}
                value={text}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.confirmCreateTask}>Confirm</Button>
        </ModalFooter>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateTaskForm);
