import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Header, TasksList } from './../components'

class MainTasksList extends Component {
  static defaultProps = {};
  
  static propTypes = {};
  
  state = {};
  
  render() {
    return (
      <div>
        <Header/>
        <TasksList/>
      </div>
    );
  }
}

export default MainTasksList;
