import PropTypes                                                         from 'prop-types'
import React, { PureComponent }                                              from 'react'
import { connect }                                                       from 'react-redux'
import { Button, Form, FormGroup, Input, Label, ModalBody, ModalFooter } from 'reactstrap'
import { bindActionCreators }                                            from 'redux'
import { tasksActions }                                                  from '../../changers/tasks/actions'
import { uiActions }                                                     from '../../changers/ui/actions'

const mapDispatchToProps = ( dispatch ) => ({
  tasksActions: bindActionCreators( { ...tasksActions }, dispatch ),
  uiActions:    bindActionCreators( { ...uiActions }, dispatch ),
})

class CreateTaskForm extends PureComponent {
  static propTypes = {
    tasksActions: PropTypes.shape( {
      createTask: PropTypes.func.isRequired,
    } ),
    uiActions:    PropTypes.shape( {
      closeModalCreateTask: PropTypes.func.isRequired,
    } ),
  }
  
  state = {
    username: '',
    email:    '',
    text:     '',
    image:    null,
  }
  
  handleUsernameChange = ( ev ) =>
    this.setState( { username: ev.target.value } )
  
  handleEmailChange = ( ev ) =>
    this.setState( { email: ev.target.value } )
  
  handleTaskChange = ( ev ) =>
    this.setState( { text: ev.target.value } )
  
  handleChangeImage = ( ev ) =>
    this.setState( { image: ev.target.files.length && ev.target.files[0] } )
  
  confirmCreateTask = () => {
    const { username, email, text, image } = this.state
    const { tasksActions, uiActions } = this.props
    if( username && email && text && image ) {
      tasksActions.createTask( { username, email, text, image } )
      uiActions.closeModalCreateTask()
    }
  }
  
  render() {
    const { username, email, text } = this.state
    
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
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                type="file"
                name="image"
                id="image"
                onChange={this.handleChangeImage}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.confirmCreateTask}>
            Confirm
          </Button>
        </ModalFooter>
      </>
    )
  }
}

export default connect( null, mapDispatchToProps )( CreateTaskForm )
