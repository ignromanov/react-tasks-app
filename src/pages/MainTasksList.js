import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Header, TasksList } from './../components'
import Login from "../components/Login";
import AddNewTask from "../components/AddNewTask";

class MainTasksList extends Component {
  static defaultProps = {};
  
  static propTypes = {};
  
  state = {};
  
  render() {
    return (
      <div>
        <Header/>
        <Login/>
        <AddNewTask/>
        <TasksList/>
      </div>
    );
  }
}

export default MainTasksList;
