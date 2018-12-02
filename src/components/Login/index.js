import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {
  Modal,
  ModalHeader,
} from 'reactstrap';
import { bindActionCreators } from 'redux'
import { uiActions } from "../../requests/ui/actions";
import LoginForm from "./LoginForm";

const mapStateToProps = (state) => ({
  uiState: state.uiState
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators({...uiActions}, dispatch)
})

class Login extends Component {
  static propTypes = {
    uiState: PropTypes.shape({
      isModalLogin: PropTypes.bool
    }),
    uiActions: PropTypes.shape({
      closeModalLogin: PropTypes.func.isRequired
    })
  };
  
  static getDerivedStateFromProps(newProps, state) {
    const storedIsModalLogin = newProps.uiState.get('isModalLogin')
    if(!state.isModalLogin || storedIsModalLogin !== state.isModalLogin)
      return ({
        isModalLogin: storedIsModalLogin
      })
    
    return null
  }
  
  state = {
    isModalLogin: undefined,
    username: '',
    password: ''
  }
  
  closeModal = () =>
    this.props.uiActions.closeModalLogin()
  
  render() {
    const { isModalLogin } = this.state
    return (
      <Modal isOpen={isModalLogin} toggle={this.closeModal} className={this.props.className}>
        <ModalHeader toggle={this.closeModal}>Login</ModalHeader>
        <LoginForm/>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
