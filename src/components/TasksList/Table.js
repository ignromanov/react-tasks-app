import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {uiActions} from "../../changers/ui/actions";
import BootstrapTable from 'react-bootstrap-table-next'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const mapStateToProps = (state) => ({
  tasksState: state.tasksState,
  uiState: state.uiState
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators({...uiActions}, dispatch)
})

class Table extends Component {
  static defaultProps = {};
  
  static propTypes = {
    uiState: PropTypes.shape({
      isModalCreateTask: PropTypes.bool
    }),
    uiActions: PropTypes.shape({
      openModalCreateTask: PropTypes.func.isRequired
    })
  };

  static getDerivedStateFromProps(newProps, state) {
    const storedIsModalCreateTask = newProps.uiState.get('isModalCreateTask')
    if (!state.isModalCreateTask || storedIsModalCreateTask !== state.isModalCreateTask)
      return ({
        isModalCreateTask: storedIsModalCreateTask
      })
    
    return null
  }
  
  state = {
    sortField: undefined,
    sortOrder: undefined,
    isModalCreateTask: undefined
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
    
    const {tasksState} = this.props
    const columns = [{
      dataField: 'id',
      text: 'id',
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
      dataField: 'text',
      text: 'Text'
    }, {
      dataField: 'status',
      text: 'Confirmed',
      sort: true,
      onSort: (field, order) => this.onSortChange(field, order)
    }];
    const defaultSorted = [{
      dataField: tasksState.get('sort_field'),
      order: tasksState.get('sort_direction')
    }]
    
    
    return (
      <BootstrapTable
        bootstrap4
        keyField='id'
        data={tasksState.get('tasks').toJS()}
        columns={columns}
        defaultSorted={defaultSorted}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
