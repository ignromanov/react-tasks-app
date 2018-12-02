import { fromJS } from 'immutable';
import {types} from "./types";

const initState = fromJS({
  isModalAddNewTask: false,
  isModalLogin: false
})

export const uiReducer = (state = initState, action) => {
  const {type, payload, response} = action
  
  switch (type) {
    // Add new task
    case types.OPEN_MODAL_ADD_NEW_TASK:
      return state.set('isModalAddNewTask', true)
    
    case types.CLOSE_MODAL_ADD_NEW_TASK:
      return state.set('isModalAddNewTask', false)
  
    // Login
    case types.OPEN_MODAL_LOGIN:
      return state.set('isModalLogin', true)
  
    case types.CLOSE_MODAL_LOGIN:
      return state.set('isModalLogin', false)
  
    
    default:
      return state
  }
}