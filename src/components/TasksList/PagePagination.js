import PropTypes                                      from 'prop-types'
import React, { Component }                           from 'react'
import { connect }                                    from 'react-redux'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { bindActionCreators }                         from 'redux'
import { tasksActions }                               from '../../changers/tasks/actions'


const mapStateToProps = ( state ) => ({
  isLoaded:         state.tasksState.get( 'isLoaded' ),
  page:             parseInt( state.tasksState.get( 'page' ) ),
  total_task_count: parseInt( state.tasksState.get( 'total_task_count' ) ),
  tasks_per_page:   parseInt( state.tasksState.get( 'tasks_per_page' ) ),
})

const mapDispatchToProps = ( dispatch ) => ({
  tasksActions: bindActionCreators( { ...tasksActions }, dispatch ),
})

class PagePagination extends Component {
  static propTypes = {
    page:             PropTypes.number.isRequired,
    isLoaded:         PropTypes.bool.isRequired,
    total_task_count: PropTypes.number.isRequired,
    tasks_per_page:   PropTypes.number.isRequired,
  }
  
  handleChangePage = page => () =>
    this.props.tasksActions.changePage( page )
  
  getPaginationItems = () => {
    const { page, total_task_count, tasks_per_page } = this.props
    const totalPages = Math.ceil( total_task_count / tasks_per_page )
    
    // first arrow
    let pagMap = [
      <PaginationItem key='0' disabled={page === 1}>
        <PaginationLink previous href="#" onClick={this.handleChangePage( 1 )}/>
      </PaginationItem>,
    ]
    
    // page numbers
    for( let i = 1; i <= totalPages; i++ ) {
      if( i < page - 2 || i > page + 2 ) continue
      pagMap.push(
        <PaginationItem key={i} active={i === page && true}>
          <PaginationLink href="#" onClick={this.handleChangePage( i )}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      )
    }
    
    // last arrow
    pagMap.push(
      <PaginationItem key={totalPages + 1} disabled={page === totalPages && true}>
        <PaginationLink next href="#" onClick={this.handleChangePage( totalPages )}/>
      </PaginationItem>,
    )
    
    return pagMap
  }
  
  render() {
    const { isLoaded } = this.props
    if( !isLoaded ) return null
    return (
      <Pagination aria-label="Tasks navigation">
        {this.getPaginationItems()}
      </Pagination>)
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( PagePagination )
