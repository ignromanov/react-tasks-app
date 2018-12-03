import React, { Component } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { card }             from '../decorators'
import Create               from './Create'
import PagePagination       from './PagePagination'
import Table                from './Table'

class TasksList extends Component {
  static defaultProps = {}
  
  render() {
    return (
      <div>
        <Table/>
        <PagePagination/>
        <Create/>
      </div>
    )
  }
}


// export default TasksList;
export default card( 'Список задач', TasksList )
