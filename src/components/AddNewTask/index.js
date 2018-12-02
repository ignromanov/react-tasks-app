import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { uiActions } from "../../requests/ui/actions";

const mapStateToProps = (state) => ({
  uiState: state.uiState
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators({...uiActions}, dispatch)
})

class AddNewTask extends Component {
  static propTypes = {
    uiState: PropTypes.shape({
      isModalAddNewTask: PropTypes.bool
    }),
    uiActions: PropTypes.shape({
      closeModalAddNewTask: PropTypes.func.isRequired
    })
  };
  
  static getDerivedStateFromProps(newProps, state) {
    const storedIsModalAddNewTask = newProps.uiState.get('isModalAddNewTask')
    if(!state.isModalAddNewTask || storedIsModalAddNewTask !== state.isModalAddNewTask)
      return ({
        isModalAddNewTask: storedIsModalAddNewTask
      })
    
    return null
  }
  
  state = {
    isModalAddNewTask: undefined
  }
  
  toggle = () =>
    this.props.uiActions.closeModalAddNewTask()
  
  render() {
    const { isModalAddNewTask } = this.state
    return (
      <Modal isOpen={isModalAddNewTask} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Add new task</ModalHeader>
        <ModalBody>
          Input new task data
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Confirm</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTask);
