import PropTypes            from 'prop-types'
import React, { Component } from 'react'

import { connect }            from 'react-redux'
import { Modal, ModalHeader } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { uiActions }          from '../../changers/ui/actions'
import CreateTaskForm         from './CreateTaskForm'

const mapStateToProps = ( state ) => ({
  uiState: state.uiState,
})

const mapDispatchToProps = ( dispatch ) => ({
  uiActions: bindActionCreators( { ...uiActions }, dispatch ),
})

class CreateTask extends Component {
  static propTypes = {
    uiState:   PropTypes.shape( {
      isModalCreateTask: PropTypes.bool,
    } ),
    uiActions: PropTypes.shape( {
      closeModalCreateTask: PropTypes.func.isRequired,
    } ),
  }
  state = {
    isModalCreateTask: undefined,
  }
  toggle = () =>
    this.props.uiActions.closeModalCreateTask()
  
  static getDerivedStateFromProps( newProps, state ) {
    const storedIsModalAddNewTask = newProps.uiState.get( 'isModalCreateTask' )
    if( !state.isModalCreateTask || storedIsModalAddNewTask !== state.isModalCreateTask )
      return ({
        isModalCreateTask: storedIsModalAddNewTask,
      })
    
    return null
  }
  
  render() {
    const { isModalCreateTask } = this.state
    return (
      <Modal isOpen={isModalCreateTask} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Create task</ModalHeader>
        <CreateTaskForm/>
      </Modal>
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CreateTask )
