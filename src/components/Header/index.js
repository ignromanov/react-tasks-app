import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uiActions } from "../../requests/ui/actions";
import PropTypes from 'prop-types';
import {loginActions} from "../../requests/login/actions";


const mapStateToProps = (state) => ({
  uiState: state.uiState,
  loginState: state.loginState
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators({ ...uiActions }, dispatch),
  loginActions: bindActionCreators({ ...loginActions }, dispatch),
})

class Header extends React.Component {
  static propTypes = {};
  
  static getDerivedStateFromProps(newProps, state) {
    const {loginState} = newProps
    if(
      !state.isLogin !== loginState.get('isLogin') ||
      !state.username !== loginState.get('username')
    ) return ({
        isLogin: loginState.get('isLogin'),
        username: loginState.get('username')
      })
    
    return null
  }
  
  state = {
    username: '',
    isLogin: false,
    isDropDownOpen: false
  }
  
  handleToggle = () =>
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    })
  
  
  handleLoginClick = () => {
    const {uiState, uiActions, loginState, loginActions} = this.props
    if (!loginState.get('isLogin')) {
      if (!uiState.get('isModalLogin')) uiActions.openModalLogin()
    } else {
      loginActions.confirmLogout()
    }
  }
  
  render() {
    const { isDropDownOpen, username, isLogin } = this.state
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Confirm your task!</NavbarBrand>
        <NavbarToggler onClick={this.handleToggle} />
        <Collapse isOpen={isDropDownOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {username || 'Not logged in'}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={this.handleLoginClick}>
                  {isLogin ? 'Logout' : 'Login'}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)