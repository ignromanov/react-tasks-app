import React, { Component }  from 'react'
import { ToastContainer }    from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import CreateTask            from '../components/CreateTask'
import EditTask              from '../components/EditTask'
import Login                 from '../components/Login'
import { Header, TasksList } from './../components'

class MainTasksList extends Component {
  static defaultProps = {}
  
  static propTypes = {}
  
  state = {}
  
  render() {
    return (
      <div>
        <Header/>
        <Login/>
        <CreateTask/>
        <EditTask/>
        <TasksList/>
        <ToastContainer/>
      </div>
    )
  }
}

export default MainTasksList
