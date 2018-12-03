import React                  from 'react'
import { connect }            from 'react-redux'
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
}                             from 'reactstrap'
import { bindActionCreators } from 'redux'
import { loginActions }       from '../../changers/login/actions'
import { uiActions }          from '../../changers/ui/actions'


const mapStateToProps = ( state ) => ({
  uiState:    state.uiState,
  loginState: state.loginState,
})

const mapDispatchToProps = ( dispatch ) => ({
  uiActions:    bindActionCreators( { ...uiActions }, dispatch ),
  loginActions: bindActionCreators( { ...loginActions }, dispatch ),
})

class Header extends React.Component {
  static propTypes = {}
  state = {
    username:       '',
    isLogin:        false,
    isDropDownOpen: false,
  }
  handleToggle = () =>
    this.setState( {
      isDropDownOpen: !this.state.isDropDownOpen,
    } )
  handleLoginClick = () => {
    const { uiState, uiActions, loginState, loginActions } = this.props
    if( !loginState.get( 'isLogin' ) ) {
      if( !uiState.get( 'isModalLogin' ) ) uiActions.openModalLogin()
    } else {
      loginActions.confirmLogout()
    }
  }
  
  static getDerivedStateFromProps( newProps, state ) {
    const { loginState } = newProps
    if(
      !state.isLogin !== loginState.get( 'isLogin' ) ||
      !state.username !== loginState.get( 'username' )
    ) return ({
      isLogin:  loginState.get( 'isLogin' ),
      username: loginState.get( 'username' ),
    })
    
    return null
  }
  
  render() {
    const { isDropDownOpen, username, isLogin } = this.state
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Confirm your task!</NavbarBrand>
        <NavbarToggler onClick={this.handleToggle}/>
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
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Header )