//Core
import { fromJS } from 'immutable';
// Types
import { type } from './types';
// Instruments
// import { v4 } from 'uuid';


// const initalState = List();
const initalState = fromJS({
  total_task_count: '5',
  page:             '1',
  sort_direction:   'asc',
  sort_field:       'id',
  tasks:            [
    {
      id:         1,
      username:   'Test User',
      email:      'test_user_1@example.com',
      text:       'Hello, world!',
      status:     10,
      image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg',
    },
    {
      id:         3,
      username:   'Test User 2',
      email:      'test_user_2@example.com',
      text:       'Hello from user 2!',
      status:     0,
      image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836666_3.jpg',
    },
    {
      id:         4,
      username:   'Test User 3',
      email:      'test_user_3@example.com',
      text:       'Hello from user 3!',
      status:     0,
      image_path: 'https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836803_4.jpg',
    },
  ],
});

export const tasksReducer = (state = initalState, action) => {
  switch (action.type) {
    // case type.FILL_TASKS:
    //   const fillTaskState = state.set('tasks', fromJS(action.payload.tasks));
    //
    //   return fillTaskState.set('total_task_count', fromJS(action.payload.total_task_count));
    // case type.COMPLETE_TASK:
    //   return state.set('tasks', state.get('tasks').map((task) => {
    //     if (task.get('id') === action.payload.id) {
    //       task = task.set('completed', !task.get('completed'));
    //     }
    //
    //     return task;
    //   }));
    // case type.CREATE_TASK:
    //   return state.set('tasks', state.get('tasks').unshift(fromJS(action.payload)));
    //
    // case type.UPDATE_TASK:
    //   return state.set('tasks', state.get('tasks').map((task) => {
    //     let updateTask = task;
    //     if (task.get('id') === action.payload.id) {
    //       updateTask = fromJS(action.payload);
    //     }
    //
    //     return updateTask;
    //   }));
    // case type.CHANGE_PAGE:
    //   return state.set('page', action.payload);
    //
    // case type.SORT_TASK:
    //   return state.set('sort_field', action.payload);
    //
    // case type.SORT_ORDER_TASK:
    //   return state.set('sort_direction', action.payload);
    //
    // case type.SHOW_MODAL_PREVIEW_TASK:
    //   let newState = state.set('isModalPreviewTask', true);
    //   if (action.payload) {
    //     let task = {};
    //     newState
    //       .get('tasks')
    //       .filter((t) => t.get('id') === action.payload)
    //       .map((t) => {
    //         task.id = t.get('id');
    //         task.username = t.get('username');
    //         task.email = t.get('email');
    //         task.text = t.get('text');
    //         task.status = t.get('status');
    //         task.image_path = t.get('image_path');
    //       });
    //     newState = newState.set('previewTask', fromJS(task));
    //   }
    //
    //   return newState;
    //
    // case type.HIDE_MODAL_PREVIEW_TASK:
    //   const hideModalPreviewTask = state.delete('previewTask');
    //
    //   return hideModalPreviewTask.delete('isModalPreviewTask');
    //
    // case type.SHOW_MODAL_EDIT_TASK:
    //   let showModalEditTaskState =  state.set('editTaskId', action.payload);
    //
    //   return showModalEditTaskState.set('isModalEditTask', true);
    //
    // case type.HIDE_MODAL_EDIT_TASK:
    //   let hideModalEditTask = state.delete('previewTask');
    //   hideModalEditTask = state.delete('editTaskId');
    //
    //   return hideModalEditTask.delete('isModalEditTask');
    //
    // case type.SHOW_MODAL_NEW_TASK:
    //   return state.set('isModalNewTask', true);
    //
    // case type.HIDE_MODAL_NEW_TASK:
    //   let hideModalNewTask = state.delete('previewTask');
    //
    //   return hideModalNewTask.delete('isModalNewTask');
    //
    // case type.LOAD_DATA_PREVIEW_TASK:
    //   const loadDataImage = state.getIn([ 'previewTask', 'image_path' ])
    //     ? state.getIn([ 'previewTask', 'image_path' ])
    //     : action.payload.image_path
    //       ? action.payload.image_path : '';
    //   const previewTask =  action.payload;
    //   previewTask.image_path = loadDataImage;
    //
    //   return state.set('previewTask', fromJS(previewTask));
    
    default:
      return state;
  }
};
