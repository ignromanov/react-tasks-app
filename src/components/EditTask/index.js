import PropTypes            from 'prop-types'
import React, { Component } from 'react'

import { connect }            from 'react-redux'
import { Modal, ModalHeader } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { uiActions }          from '../../changers/ui/actions'
import EditTaskForm           from './EditTaskForm'

const mapStateToProps = ( state ) => ({
  isModalEditTask: state.uiState.get( 'isModalEditTask' ),
})

const mapDispatchToProps = ( dispatch ) => ({
  uiActions: bindActionCreators( { ...uiActions }, dispatch ),
})

class EditTask extends Component {
  static propTypes = {
    isModalEditTask: PropTypes.bool.isRequired,
    uiActions:       PropTypes.shape( {
      closeModalEditTask: PropTypes.func.isRequired,
    } ),
  }

  closeModal = () =>
    this.props.uiActions.closeModalEditTask()
  
  render() {
    const { isModalEditTask } = this.props
    return (
      <Modal isOpen={isModalEditTask} toggle={this.closeModal} className={this.props.className}>
        <ModalHeader toggle={this.closeModal}>Edit task</ModalHeader>
        <EditTaskForm/>
      </Modal>
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( EditTask )
