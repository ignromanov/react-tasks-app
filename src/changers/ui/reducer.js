import { fromJS } from 'immutable'
import { types }  from './types'

const initState = fromJS( {
  isModalCreateTask: false,
  isModalEditTask:   false,
  editTaskId:        null,
  isModalLogin:      false,
} )

export const uiReducer = ( state = initState, action ) => {
  const { type, payload } = action
  
  switch( type ) {
    // Create task
    case types.OPEN_MODAL_CREATE_TASK:
      return state.set( 'isModalCreateTask', true )
    
    case types.CLOSE_MODAL_CREATE_TASK:
      return state.set( 'isModalCreateTask', false )
    
    // Edit task
    case types.OPEN_MODAL_EDIT_TASK:
      return state
        .set( 'isModalEditTask', true )
        .set( 'editTaskId', payload.id )
    
    case types.CLOSE_MODAL_EDIT_TASK:
      return state
        .set( 'isModalEditTask', false )
        .set( 'editTaskId', null )
    
    // Login
    case types.OPEN_MODAL_LOGIN:
      return state.set( 'isModalLogin', true )
    
    case types.CLOSE_MODAL_LOGIN:
      return state.set( 'isModalLogin', false )
    
    
    default:
      return state
  }
}