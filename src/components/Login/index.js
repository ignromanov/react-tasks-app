import PropTypes              from 'prop-types'
import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { Modal, ModalHeader } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { uiActions }          from '../../changers/ui/actions'
import LoginForm              from './LoginForm'

const mapStateToProps = ( state ) => ({
  isModalLogin: state.uiState.get( 'isModalLogin' ),
})

const mapDispatchToProps = ( dispatch ) => ({
  uiActions: bindActionCreators( { ...uiActions }, dispatch ),
})

class Login extends Component {
  static propTypes = {
    isModalLogin: PropTypes.bool.isRequired,
    uiActions:    PropTypes.shape( {
      closeModalLogin: PropTypes.func.isRequired,
    } ),
  }
  
  state = {
    username: '',
    password: '',
  }
  
  closeModal = () =>
    this.props.uiActions.closeModalLogin()
  
  render() {
    const { isModalLogin } = this.props
    return (
      <Modal isOpen={isModalLogin} toggle={this.closeModal} className={this.props.className}>
        <ModalHeader toggle={this.closeModal}>Login</ModalHeader>
        <LoginForm/>
      </Modal>
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Login )
