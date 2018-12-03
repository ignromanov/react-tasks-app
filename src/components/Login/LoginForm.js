import PropTypes                                                         from 'prop-types'
import React, { PureComponent }                                              from 'react'
import { connect }                                                       from 'react-redux'
import { Button, Form, FormGroup, Input, Label, ModalBody, ModalFooter } from 'reactstrap'
import { bindActionCreators }                                            from 'redux'
import { loginActions }                                                  from '../../changers/login/actions'
import { uiActions }                                                     from '../../changers/ui/actions'


const mapDispatchToProps = ( dispatch ) => ({
  loginActions: bindActionCreators( { ...loginActions }, dispatch ),
  uiActions:    bindActionCreators( { ...uiActions }, dispatch ),
})

class LoginForm extends PureComponent {
  static propTypes = {
    loginActions: PropTypes.shape( {
      confirmLogin: PropTypes.func.isRequired,
    } ),
    uiActions:    PropTypes.shape( {
      closeModalLogin: PropTypes.func.isRequired,
    } ),
  }
  
  state = {
    username: '',
    password: '',
  }
  
  handleUsernameChange = ( ev ) =>
    this.setState( { username: ev.target.value } )
  
  handlePasswordChange = ( ev ) =>
    this.setState( { password: ev.target.value } )
  
  confirmLogin = () => {
    const { username, password } = this.state
    const { loginActions, uiActions } = this.props
    loginActions.confirmLogin( username, password )
    uiActions.closeModalLogin()
  }
  
  render() {
    const { username, password } = this.state
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
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="enter password"
                onChange={this.handlePasswordChange}
                value={password}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.confirmLogin}>Login</Button>
        </ModalFooter>
      </>
    )
  }
}

export default connect( null, mapDispatchToProps )( LoginForm )
