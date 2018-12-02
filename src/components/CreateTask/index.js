import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { uiActions } from "../../changers/ui/actions";
import CreateTaskForm from "./CreateTaskForm";

const mapStateToProps = (state) => ({
  uiState: state.uiState
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators({...uiActions}, dispatch)
})

class AddNewTask extends Component {
  static propTypes = {
    uiState: PropTypes.shape({
      isModalCreateTask: PropTypes.bool
    }),
    uiActions: PropTypes.shape({
      closeModalAddNewTask: PropTypes.func.isRequired
    })
  };
  
  static getDerivedStateFromProps(newProps, state) {
    const storedIsModalAddNewTask = newProps.uiState.get('isModalCreateTask')
    if(!state.isModalCreateTask || storedIsModalAddNewTask !== state.isModalCreateTask)
      return ({
        isModalCreateTask: storedIsModalAddNewTask
      })
    
    return null
  }
  
  state = {
    isModalCreateTask: undefined
  }
  
  toggle = () =>
    this.props.uiActions.closeModalAddNewTask()
  
  render() {
    const { isModalAddNewTask } = this.state
    return (
      <Modal isOpen={isModalAddNewTask} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Add new task</ModalHeader>
        <CreateTaskForm/>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTask);
