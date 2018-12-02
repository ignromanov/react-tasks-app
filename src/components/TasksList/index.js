import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { card } from '../decorators'
import {connect} from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import Create from './Create'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import {uiActions} from "../../changers/ui/actions";
import {bindActionCreators} from "redux";
import Table from "./Table";
import PagePagination from "./PagePagination";

class TasksList extends Component {
  static defaultProps = {};
  
  render() {
    return (
      <div>
        <Table/>
        <PagePagination/>
        <Create/>
      </div>
    );
  }
}


// export default TasksList;
export default card('Список задач', TasksList)
