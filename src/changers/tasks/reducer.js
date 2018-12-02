//Core
import { fromJS } from 'immutable';
// Types
import { types } from './types';
// Instruments
// import { v4 } from 'uuid';


// const initalState = List();
const initState = fromJS({
  isLoading: false,
  isLoaded: true,
  total_task_count: '5',
  page:             '1',
  tasks_per_page: '3',
  sort_direction:   'asc',
  sort_field:       'id',
  tasks:            [
    {
      id:         1,
      username:   'Test User',
      email:      'test_user_1@example.com',
      text:       'Hello, world!',
      status:     10,
    },
    {
      id:         3,
      username:   'Test User 2',
      email:      'test_user_2@example.com',
      text:       'Hello from user 2!',
      status:     0,
    },
    {
      id:         4,
      username:   'Test User 3',
      email:      'test_user_3@example.com',
      text:       'Hello from user 3!',
      status:     0,
    },
  ],
});

export const tasksReducer = (state = initState, action) => {
  const {payload} = action
  switch (action.type) {
    case types.CREATE_TASK + types.REQUEST:
      return state
        .set('isLoading', true)
        .set('isLoaded', false)
    
    case types.CREATE_TASK + types.SUCCESS:
      return state
        .set('isLoading', false)
        .set('isLoaded', true)
  
    case types.CREATE_TASK + types.FAIL:
      return state
        .set('isLoading', false)
        .set('isLoaded', false)
  
    case types.CHANGE_PAGE:
      return state.set('page', payload.page)
  
    default:
      return state;
  }
};
