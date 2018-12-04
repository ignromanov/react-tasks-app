import React, { Component }                               from 'react'
import { ToastContainer }                                 from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { CreateTask, EditTask, Header, Login, TasksList } from './../components'

class MainTasksList extends Component {
  static defaultProps = {}
  
  static propTypes = {}
  
  state = {}
  
  render() {
    return (
      <div className='main-tasks-list'>
        <Header/>
        <Login/>
        <CreateTask/>
        <EditTask/>
        <TasksList/>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    )
  }
}

export default MainTasksList
