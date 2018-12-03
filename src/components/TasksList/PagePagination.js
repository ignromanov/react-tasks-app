import React, { Component }                           from 'react'
import { connect }                                    from 'react-redux'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { bindActionCreators }                         from 'redux'
import { tasksActions }                               from '../../changers/tasks/actions'


const mapStateToProps = ( state ) => ({
  tasksState: state.tasksState,
})

const mapDispatchToProps = ( dispatch ) => ({
  tasksActions: bindActionCreators( { ...tasksActions }, dispatch ),
})

class PagePagination extends Component {
  static defaultProps = {}
  
  static propTypes = {}
  state = {
    page: null,
  }
  handleChangePage = page => () =>
    this.props.tasksActions.changePage( page )
  
  getPaginationItems = () => {
    const { tasksState } = this.props
    const { page } = this.state
    const totalPages = Math.ceil( tasksState.get( 'total_task_count' ) / tasksState.get( 'tasks_per_page' ) )
    
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
  
  static getDerivedStateFromProps( newProps, state ) {
    const { tasksState } = newProps
    if( tasksState.get( 'page' ) !== state.page )
      return { page: tasksState.get( 'page' ) }
    return null
  }
  
  render() {
    const { tasksState } = this.props
    if( !tasksState.get( 'isLoaded' ) ) return null
    return (
      <Pagination aria-label="Tasks navigation">
        {this.getPaginationItems()}
      </Pagination>)
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( PagePagination )
