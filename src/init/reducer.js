// Core
import {combineReducers} from 'redux';
// Reducers
import {tasksReducer} from '../requests/tasks/reducer'
import {uiReducer} from "../requests/ui/reducer";
import {loginReducer} from "../requests/login/reducer";
// import { authenticateReducer as authenticate } from '../bus/authenticate/reducer';
// import { tasksReducer as tasks } from '../bus/tasks/reducer';
// import { uiReducer as uiState } from '../bus/uiState/reducer';

export const reducer = combineReducers({
  loginState: loginReducer,
  tasks: tasksReducer,
  uiState: uiReducer
});
