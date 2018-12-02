import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap'
import {bindActionCreators} from "redux";
import {uiActions} from "../../changers/ui/actions";
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators({...uiActions}, dispatch)
})

class Create extends Component {
  static defaultProps = {};
  
  static propTypes = {};
  
  handleCreateTask = () => {
    this.props.uiActions.openModalCreateTask()
  }
  
  state = {};
  
  render() {
    return (
      <Button color="primary" onClick={this.handleCreateTask}>Create task</Button>
    );
  }
}

export default connect(null, mapDispatchToProps)(Create);
