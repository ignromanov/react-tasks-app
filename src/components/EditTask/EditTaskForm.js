import PropTypes                                                         from 'prop-types'
import React, { PureComponent }                                              from 'react'
import { connect }                                                       from 'react-redux'
import { Button, Form, FormGroup, Input, Label, ModalBody, ModalFooter } from 'reactstrap'
import { bindActionCreators }                                            from 'redux'
import { tasksActions }                                                  from '../../changers/tasks/actions'
import { uiActions }                                                     from '../../changers/ui/actions'

const mapStateToProps = ( state ) => ({
  tasksState: state.tasksState,
  uiState:    state.uiState,
})
const mapDispatchToProps = ( dispatch ) => ({
  tasksActions: bindActionCreators( { ...tasksActions }, dispatch ),
  uiActions:    bindActionCreators( { ...uiActions }, dispatch ),
})

class EditTaskForm extends PureComponent {
  static propTypes = {
    tasksActions: PropTypes.shape( {
      editTask: PropTypes.func.isRequired,
    } ),
    uiActions:    PropTypes.shape( {
      closeModalEditTask: PropTypes.func.isRequired,
    } ),
  }
  state = {
    id:       null,
    username: '',
    email:    '',
    text:     '',
    status:   0,
  }
  
  handleUsernameChange = ( ev ) =>
    this.setState( { username: ev.target.value } )
  
  handleEmailChange = ( ev ) =>
    this.setState( { email: ev.target.value } )
  
  handleTaskChange = ( ev ) =>
    this.setState( { text: ev.target.value } )
  
  handleStatusChange = ( ev ) =>
    this.setState( { status: ev.target.checked ? 10 : 0 } )
  
  confirmEditTask = () => {
    const { id, username, email, text, status } = this.state
    const { tasksActions, uiActions } = this.props
    
    if( id && username && email && text ) {
      tasksActions.editTask( { id, text, status } )
      uiActions.closeModalEditTask()
    }
  }
  
  static getDerivedStateFromProps( newProps, state ) {
    const { uiState, tasksState } = newProps
    const editTaskId = uiState.get( 'editTaskId' )
    const getTaskById = ( id ) =>
      tasksState.get( 'tasks' ).toJS()
        .find( task => task.id === id )
    
    if( editTaskId && editTaskId !== state.id )
      return getTaskById( editTaskId )
    
    return null
  }
  
  render() {
    const { username, email, text, status } = this.state
    
    return (
      <>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                disabled
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
                disabled
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
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  defaultChecked={status === 10}
                  onChange={this.handleStatusChange}
                />{' '}
                Confirm the task
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.confirmEditTask}>Confirm</Button>
        </ModalFooter>
      </>
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( EditTaskForm )
