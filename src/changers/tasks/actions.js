import { tasksAPI } from '../../API'
import { types }    from './types'

export const tasksActions = {
  
  fetchTasks: () => {
    return ( dispatch, getState ) => {
      const { tasksState } = getState()
      const filter = {
        page:           tasksState.get( 'page' ),
        sort_direction: tasksState.get( 'sort_direction' ),
        sort_field:     tasksState.get( 'sort_field' ),
      }
      
      dispatch( {
        type:    types.FETCH_TASKS,
        payload: { filter },
        callAPI: tasksAPI.fetch,
      } )
    }
  },
  
  createTask: task => {
    return dispatch => {
      return dispatch( {
        type:    types.CREATE_TASK,
        payload: { task },
        callAPI: tasksAPI.create,
      } )
    }
  },
  
  editTask: task => {
    return dispatch => {
      return dispatch( {
        type:    types.EDIT_TASK,
        payload: { task },
        callAPI: tasksAPI.edit,
      } )
    }
  },
  
  changePage: page => {
    return dispatch => {
      dispatch( {
        type:    types.CHANGE_PAGE,
        payload: { page },
      } )
      
      dispatch( tasksActions.fetchTasks() )
    }
  },
  
  changeFilter: ( filter ) => {
    return dispatch => {
      return dispatch( {
        type:    types.CHANGE_FILTER,
        payload: { filter },
      } )
    }
  },
  
}
