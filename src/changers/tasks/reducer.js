import { fromJS } from 'immutable'
import { toast }  from 'react-toastify'
import { types }  from './types'

const initState = fromJS( {
  isLoading:        false,
  isLoaded:         false,
  error:            '',
  create:           {
    isCreating: false,
    isCreated:  false,
    error:      undefined,
  },
  edit:             {
    isEditing: false,
    isEdited:  false,
    error:     undefined,
  },
  total_task_count: '3',
  page:             '1',
  tasks_per_page:   '3',
  sort_direction:   'asc',
  sort_field:       'id',
  tasks:            [
    {
      id:       1,
      username: 'User',
      email:    'user@example.com',
      text:     'Hello, world!',
      status:   10,
    },
    {
      id:       3,
      username: 'User 2',
      email:    'user2@example.com',
      text:     'Hello 2!',
      status:   0,
    },
  ],
} )

export const tasksReducer = ( state = initState, action ) => {
  const { payload, response, error } = action
  switch( action.type ) {
    // fetch
    case types.FETCH_TASKS + types.REQUEST:
      return state
        .set( 'isLoading', true )
        .set( 'isLoaded', false )
    
    case types.FETCH_TASKS + types.SUCCESS:
      return state
        .set( 'total_task_count', response.total_task_count )
        .set( 'tasks', fromJS( response.tasks ) )
        .set( 'isLoading', false )
        .set( 'isLoaded', true )
    
    case types.FETCH_TASKS + types.FAIL:
      toast.error( `Cannot fetch tasks list: ${error}` )
      return state
        .set( 'tasks', fromJS( [] ) )
        .set( 'isLoading', false )
        .set( 'isLoaded', false )
    
    // create
    case types.CREATE_TASK + types.REQUEST:
      return state
        .setIn( ['create', 'error'], undefined )
        .setIn( ['create', 'isCreating'], true )
        .setIn( ['create', 'isCreated'], false )
    
    case types.CREATE_TASK + types.SUCCESS:
      toast.success( `Task created (id: ${response.id})` )
      return state
        .setIn( ['create', 'isCreating'], false )
        .setIn( ['create', 'isCreated'], true )
        .set( 'isLoaded', false )
    
    case types.CREATE_TASK + types.FAIL:
      toast.error( `Cannot create task:\n${error}` )
      return state
        .setIn( ['create', 'error'], error )
        .setIn( ['create', 'isCreating'], false )
        .setIn( ['create', 'isCreated'], false )
    
    // edit
    case types.EDIT_TASK + types.REQUEST:
      return state
        .setIn( ['edit', 'error'], undefined )
        .setIn( ['edit', 'isEditing'], true )
        .setIn( ['edit', 'isEdited'], false )
    
    case types.EDIT_TASK + types.SUCCESS:
      toast.success( `Task edited` )
      return state
        .setIn( ['edit', 'isEditing'], false )
        .setIn( ['edit', 'isEdited'], true )
        .set( 'isLoaded', false )
    
    case types.EDIT_TASK + types.FAIL:
      toast.error( `Cannot edit task: ${error}` )
      return state
        .setIn( ['edit', 'error'], error )
        .setIn( ['edit', 'isEditing'], false )
        .setIn( ['edit', 'isEdited'], false )
    
    // change
    case types.CHANGE_PAGE:
      return state.set( 'page', payload.page )
    
    case types.CHANGE_FILTER:
      return state
        .set( 'sort_field', payload.filter.sort_field )
        .set( 'sort_direction', payload.filter.sort_direction )
        .set( 'isLoaded', false )
    
    default:
      return state
  }
}
