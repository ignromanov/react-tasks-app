import PropTypes              from 'prop-types'
import React, { Component }   from 'react'
import BootstrapTable         from 'react-bootstrap-table-next'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { tasksActions }       from '../../changers/tasks/actions'
import { uiActions }          from '../../changers/ui/actions'

const mapStateToProps = ( state ) => ({
  tasksState: state.tasksState,
  loginState: state.loginState,
})

const mapDispatchToProps = ( dispatch ) => ({
  uiActions:    bindActionCreators( { ...uiActions }, dispatch ),
  tasksActions: bindActionCreators( { ...tasksActions }, dispatch ),
})

class Table extends Component {
  static propTypes = {
    uiActions:    PropTypes.shape( {
      openModalEditTask: PropTypes.func.isRequired,
    } ),
    tasksActions: PropTypes.shape( {
      changeFilter: PropTypes.func.isRequired,
    } ),
  }
  
  getColumns = () => {
    return [
      {
        dataField: 'id',
        text:      'id',
        sort:      true,
        onSort:    this.onSortChange,
      }, {
        dataField: 'username',
        text:      'Username',
        sort:      true,
        onSort:    this.onSortChange,
      }, {
        dataField: 'email',
        text:      'E-mail',
        sort:      true,
        onSort:    this.onSortChange,
      }, {
        dataField: 'text',
        text:      'Text',
      }, {
        dataField: 'status',
        text:      'Confirmed',
        hidden:    true,
      },
    ]
  }
  
  getData = () => {
    const { tasksState } = this.props
    return tasksState.get( 'isLoaded' ) && !tasksState.get( 'isLoading' )
           ? tasksState.get( 'tasks' ).toJS() : []
  }
  
  getNoDataIndication = () => {
    const { tasksState } = this.props
    return tasksState
             .get( 'isLoading' )
           ? 'Data loading...'
           : (!tasksState.get( 'isLoaded' )
              ? `Not loaded (${tasksState.get( 'error' )})`
              : 'No data')
  }
  
  getDefaultSorted = () => {
    const { tasksState } = this.props
    return [
      {
        dataField: tasksState.get( 'sort_field' ),
        order:     tasksState.get( 'sort_direction' ),
      },
    ]
  }
  
  onSortChange = ( sortField, sortOrder ) =>
    this.props.tasksActions.changeFilter( {
      sort_field:     sortField,
      sort_direction: sortOrder,
    } )
  
  confirmedClasses = ( row ) =>
    (row.status === 10 && 'bg-success') || ''
  
  rowEvents = {
    onClick: ( e, row ) => {
      const { loginState, uiActions } = this.props
      if( !loginState.get( 'isLogin' ) ) return
      uiActions.openModalEditTask( row.id )
    },
  }
  
  render() {
    return (
      <BootstrapTable
        bootstrap4
        hover
        keyField='id'
        data={this.getData()}
        columns={this.getColumns()}
        defaultSorted={this.getDefaultSorted()}
        rowClasses={this.confirmedClasses}
        rowEvents={this.rowEvents}
        noDataIndication={this.getNoDataIndication()}
      />
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Table )
