import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap'
import {bindActionCreators} from "redux";
import {uiActions} from "../../changers/ui/actions";
import {tasksActions} from "../../changers/tasks/actions"
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
  tasksState: state.tasksState
})

const mapDispatchToProps = (dispatch) => ({
  tasksActions: bindActionCreators({...tasksActions}, dispatch)
})

// total_task_count: '5',
//   page:             '1',
// tasks_per_page: '3',

class PagePagination extends Component {
  static defaultProps = {};
  
  static propTypes = {};
  
  state = {};
  
  handleChangePage = page => ev =>
    this.props.tasksActions.changePage(page)
  
  
  getPaginationItems = () => {
    const {tasksState} = this.props
    const page = parseInt(tasksState.get('page'))
    const totalPages = Math.ceil(tasksState.get('total_task_count') / tasksState.get('tasks_per_page'))
  
    let pagMap = [
      <PaginationItem key='0' disabled={page === 1} >
        <PaginationLink previous href="#" onClick={this.handleChangePage(1)}/>
      </PaginationItem>
    ]
    
    for (let i = 1; i <= totalPages; i++) {
      if(i < page - 2 || i > page + 2) continue
      pagMap.push(
        <PaginationItem key={i} active={i === page && true}>
          <PaginationLink href="#" onClick={this.handleChangePage(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
    pagMap.push(
      <PaginationItem key={totalPages+1} disabled={page === totalPages && true}>
        <PaginationLink next href="#" onClick={this.handleChangePage(totalPages)}/>
      </PaginationItem>
    )
    
    return pagMap
  }
  
  render() {
    const {tasksState} = this.props
    if(!tasksState.get('isLoaded')) return null
    
    return (
      <Pagination aria-label="Page navigation example">
        {this.getPaginationItems()}
      </Pagination>    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PagePagination);
