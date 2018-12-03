import PropTypes            from 'prop-types'
import React, { Component } from 'react'

import { connect }            from 'react-redux'
import { Modal, ModalHeader } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { uiActions }          from '../../changers/ui/actions'
import CreateTaskForm         from './CreateTaskForm'

const mapStateToProps = ( state ) => ({
  isModalCreateTask: state.uiState.get('isModalCreateTask'),
})

const mapDispatchToProps = ( dispatch ) => ({
  uiActions: bindActionCreators( { ...uiActions }, dispatch ),
})

class CreateTask extends Component {
  static propTypes = {
    isModalCreateTask: PropTypes.bool.isRequired,
    uiActions: PropTypes.shape( {
      closeModalCreateTask: PropTypes.func.isRequired,
    } ),
  }

  toggle = () =>
    this.props.uiActions.closeModalCreateTask()
  
  render() {
    const { isModalCreateTask } = this.props
    return (
      <Modal isOpen={isModalCreateTask} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Create task</ModalHeader>
        <CreateTaskForm/>
      </Modal>
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CreateTask )
