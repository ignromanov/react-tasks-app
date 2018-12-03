import { combineReducers } from 'redux'
import { loginReducer }    from '../changers/login/reducer'
import { tasksReducer }    from '../changers/tasks/reducer'
import { uiReducer }       from '../changers/ui/reducer'

export const reducer = combineReducers( {
  loginState: loginReducer,
  tasksState: tasksReducer,
  uiState:    uiReducer,
} )
