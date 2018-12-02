import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {
  Button,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { bindActionCreators } from 'redux'
import {loginActions} from "../../changers/login/actions";


const mapStateToProps = (state) => ({
  // loginState: state.loginState
})

const mapDispatchToProps = (dispatch) => ({
  loginActions: bindActionCreators({...loginActions}, dispatch)
})

class LoginForm extends Component {
  static defaultProps = {};
  
  static propTypes = {};
  
  state = {
    username: '',
    password: ''
  }
  
  handleUsernameChange = (ev) =>
    this.setState({ username: ev.target.value })
  
  handlePasswordChange = (ev) =>
    this.setState({ password: ev.target.value })
  
  confirmLogin = () => {
    const { username, password } = this.state
    this.props.loginActions.confirmLogin(username, password)
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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
