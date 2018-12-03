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
  
  createTask: task => ({
    type:    types.CREATE_TASK,
    payload: { task },
    callAPI: tasksAPI.create,
  }),
  
  editTask: task => ({
    type:    types.EDIT_TASK,
    payload: { task },
    callAPI: tasksAPI.edit,
  }),
  
  changePage: page => ({
    type:    types.CHANGE_PAGE,
    payload: { page },
  }),
  
  changeFilter: filter => ({
    type:    types.CHANGE_FILTER,
    payload: { filter },
  }),
  
}
