import { types } from './types';

export const tasksActions = {
  
  createTask: task => ({
    type: types.CREATE_TASK,
    payload: { task }
  }),
  
  changePage: page => ({
    type: types.CHANGE_PAGE,
    payload: { page }
  })
  
};
