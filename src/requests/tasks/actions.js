import { type } from './types';

export const tasksActions = {
  // Sync
  fillTasks: (tasks) => {
    return {
      type:    type.FILL_TASKS,
      payload: tasks,
    };
  },
  
  createTask: (task) => {
    return {
      type:    type.CREATE_TASK,
      payload: task,
      
    };
  },
  updateTask: (task) => {
    return {
      type:    type.UPDATE_TASK,
      payload: task,
      
    };
  },
  completeTask: (task) => {
    return {
      type:    type.COMPLETE_TASK,
      payload: task,
    };
  },
  showModalPreviewTask: (id) => {
    return {
      type:    type.SHOW_MODAL_PREVIEW_TASK,
      payload: id,
    };
  },
  hideModalPreviewTask: () => {
    return {
      type: type.HIDE_MODAL_PREVIEW_TASK,
    };
  },
  showModalEditTask: (id) => {
    return {
      type:    type.SHOW_MODAL_EDIT_TASK,
      payload: id,
    };
  },
  hideModalEditTask: () => {
    return {
      type: type.HIDE_MODAL_EDIT_TASK,
    };
  },
  showModalNewTask: () => {
    return {
      type: type.SHOW_MODAL_NEW_TASK,
    };
  },
  hideModalNewTask: () => {
    return {
      type: type.HIDE_MODAL_NEW_TASK,
    };
  },
  loadDataPreviewTask: (task) => {
    return {
      type:    type.LOAD_DATA_PREVIEW_TASK,
      payload: task,
    };
  },
  setPage: (page) => {
    return {
      type:    type.CHANGE_PAGE,
      payload: page,
    };
  },
  sortTask: (sort) => {
    return {
      type:    type.SORT_TASK,
      payload: sort,
    };
  },
  sortOrderTask: (sortOrder) => {
    return {
      type:    type.SORT_ORDER_TASK,
      payload: sortOrder,
    };
  },
  
  // Async
  fetchTasksAsync: () => {
    return {
      type: type.FETCH_TASKS_ASYNC,
    };
  },
  createTaskAsync: (task) => {
    return {
      type:    type.CREATE_TASK_ASYNC,
      payload: task,
    };
  },
  updateTaskAsync: (task) => {
    return {
      type:    type.UPDATE_TASK_ASYNC,
      payload: task,
    };
  },
  completeTaskAsync: (task) => {
    return {
      type:    type.COMPLETE_TASK_ASYNC,
      payload: task,
    };
  },
  setPageAsync: (page) => {
    return {
      type:    type.CHANGE_PAGE_ASYNC,
      payload: page,
    };
  },
  sortTaskAsync: (sort) => {
    return {
      type:    type.SORT_TASK_ASYNC,
      payload: sort,
    };
  },
  sortOrderTaskAsync: (sortOrder) => {
    return {
      type:    type.SORT_ORDER_TASK_ASYNC,
      payload: sortOrder,
    };
  },
  
};
