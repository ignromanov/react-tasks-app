import PropTypes              from 'prop-types'
import React, { Component }   from 'react'
import BootstrapTable         from 'react-bootstrap-table-next'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { connect }            from 'react-redux'
import { Badge, Button }      from 'reactstrap'
import { bindActionCreators } from 'redux'
import { tasksActions }       from '../../changers/tasks/actions'
import { uiActions }          from '../../changers/ui/actions'

const mapStateToProps = ( state ) => ({
  tasksState: state.tasksState,
  isLogin:    state.loginState.get( 'isLogin' ),
})

const mapDispatchToProps = ( dispatch ) => ({
  uiActions:    bindActionCreators( { ...uiActions }, dispatch ),
  tasksActions: bindActionCreators( { ...tasksActions }, dispatch ),
})

class Table extends Component {
  static propTypes = {
    isLogin:      PropTypes.bool.isRequired,
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
        text:      'State',
        sort:      true,
        onSort:    this.onSortChange,
        formatter: this.statusFormatter,
      },
    ]
  }
  
  statusFormatter = ( cell, row ) => {
    const { isLogin } = this.props
    return (<div>
      {row.status === 10
       ? <Badge color='success'>Confirmed</Badge> : null}
      {isLogin
       ? <Button color='info' size="sm" className='float-right'>Edit</Button> : null}
    </div>)
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
  
  rowEvents = {
    onClick: ( e, row ) => {
      const { isLogin, uiActions } = this.props
      if( !isLogin ) return
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
        rowEvents={this.rowEvents}
        noDataIndication={this.getNoDataIndication()}
      />
    )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Table )
