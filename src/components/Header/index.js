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


const mapStateToProps = (state) => ({
  uiState: state.uiState
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators({ ...uiActions }, dispatch),
})

class Header extends React.Component {
  static defaultProps = {};
  
  static propTypes = {};
  
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  handleLoginClick = () => {
    const {uiState, uiActions} = this.props
    if(!uiState.get('isModalLogin')) uiActions.openModalLogin()
  }
  
  render() {
    let { username, isLogin } = this.props
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Confirm your task!</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {username}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={this.handleLoginClick}>
                  {isLogin ? 'Login' : 'Logout'}
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