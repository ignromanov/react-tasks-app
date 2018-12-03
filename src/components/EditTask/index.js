import PropTypes            from 'prop-types'
import React, { Component } from 'react'

import { connect }            from 'react-redux'
import { Modal, ModalHeader } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { uiActions }          from '../../changers/ui/actions'
import EditTaskForm           from './EditTaskForm'

const mapStateToProps = ( state ) => ({
  uiState: state.uiState,
})

const mapDispatchToProps = ( dispatch ) => ({
  uiActions: bindActionCreators( { ...uiActions }, dispatch ),
})

class EditTask extends Component {
  static propTypes = {
    uiState:   PropTypes.shape( {
      isModalEditTask: PropTypes.bool,
    } ),
    uiActions: PropTypes.shape( {
      closeModalEditTask: PropTypes.func.isRequired,
    } ),
  }
  state = {
    isModalEditTask: undefined,
  }
  closeModal = () =>
    this.props.uiActions.closeModalEditTask()
  
  static getDerivedStateFromProps( newProps, state ) {
    const storedIsModalAddNewTask = newProps.uiState.get( 'isModalEditTask' )
    if( !state.isModalEditTask || storedIsModalAddNewTask !== state.isModalEditTask )
      return ({
        isModalEditTask: storedIsModalAddNewTask,
      })
    
    return null
  }
  
  render() {
    const { isModalEditTask } = this.state
    return (
      <Modal isOpen={isModalEditTask} toggle={this.closeModal} className={this.props.className}>
        <ModalHeader toggle={this.closeModal}>Edit task</ModalHeader>
        <EditTaskForm/>
      </Modal>
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( EditTask )
