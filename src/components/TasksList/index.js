import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { card } from '../decorators'
import BootstrapTable from 'react-bootstrap-table-next'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

class TasksList extends Component {
  static defaultProps = {};
  
  static propTypes = {};
  
  constructor(props) {
    super(props);
    
    this.state = {
      sortField: undefined,
      sortOrder: undefined
    };
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
      </div>
    );
  }
}


// export default TasksList;
export default card('Список задач', TasksList)
