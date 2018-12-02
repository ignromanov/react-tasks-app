import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { card } from '../decorators'
import {connect} from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import {Button} from 'reactstrap'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import {uiActions} from "../../requests/ui/actions";
import {bindActionCreators} from "redux";


const mapStateToProps = (state) => ({
  uiState: state.uiState
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators({...uiActions}, dispatch)
})


class TasksList extends Component {
  static defaultProps = {};
  
  static propTypes = {
    uiState: PropTypes.shape({
      isModalAddNewTask: PropTypes.bool
    }),
    uiActions: PropTypes.shape({
      openModalAddNewTask: PropTypes.func.isRequired
    })
  };
  
  static getDerivedStateFromProps(newProps, state) {
    const storedIsModalAddNewTask = newProps.uiState.get('isModalAddNewTask')
    if(!state.isModalAddNewTask || storedIsModalAddNewTask !== state.isModalAddNewTask)
      return ({
        isModalAddNewTask: storedIsModalAddNewTask
      })
  
    return null
  }
  
  state = {
    sortField: undefined,
    sortOrder: undefined,
    isModalAddNewTask: undefined
  }
  
  handleAddNewTaskOnClick = () => {
    this.props.uiActions.openModalAddNewTask()
  }
  
  onSortChange = (sortField, sortOrder) => {
    console.info('onSortChange', sortField, sortOrder);
    this.setState({
      sortField,
      sortOrder
    });
    // todo: dispatch
  }
  
  render() {
    // const options = {
    //   sortField: this.state.sortField,
    //   sortOrder: this.state.sortOrder,
    //   onSortChange: this.onSortChange
    // };
    let products = [{id: 1, username: 'user 1', email: ''}, {id: 2, username: 'user 2', email: ''}]
    const columns = [{
      dataField: 'id',
      text: 'Task id',
      sort: true
    }, {
      dataField: 'username',
      text: 'Username',
      sort: true,
      onSort: (field, order) => this.onSortChange(field, order)
    }, {
      dataField: 'email',
      text: 'E-mail',
      sort: true,
      onSort: (field, order) => this.onSortChange(field, order)
    }, {
      dataField: 'task',
      text: 'Task',
      sort: true,
      onSort: (field, order) => this.onSortChange(field, order)
    }, {
      dataField: 'confirmed',
      text: 'Confirmed',
      sort: true,
      onSort: (field, order) => this.onSortChange(field, order)
    }, {
      dataField: 'action',
      text: 'Action',
      sort: true,
      onSort: (field, order) => this.onSortChange(field, order)
    }];
  
  
    return (
      <div>
        <p style={ { color: 'red' } }>sort: sortField={ this.state.sortField }, sortOrder={ this.state.sortOrder }</p>
        <BootstrapTable keyField='id' data={ products } columns={ columns } />
        <Button color="primary" onClick={this.handleAddNewTaskOnClick}>Add new task</Button>
      </div>
    );
  }
}


// export default TasksList;
export default card(
  'Список задач',
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TasksList)
)
