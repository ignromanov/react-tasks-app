import { types } from './types'

export const uiActions = {
  openModalCreateTask: () => ({
    type: types.OPEN_MODAL_CREATE_TASK,
  }),
  
  closeModalCreateTask: () => ({
    type: types.CLOSE_MODAL_CREATE_TASK,
  }),
  
  openModalEditTask: ( id ) => ({
    type:    types.OPEN_MODAL_EDIT_TASK,
    payload: { id },
  }),
  
  closeModalEditTask: () => ({
    type: types.CLOSE_MODAL_EDIT_TASK,
  }),
  
  openModalLogin: () => ({
    type: types.OPEN_MODAL_LOGIN,
  }),
  
  closeModalLogin: () => ({
    type: types.CLOSE_MODAL_LOGIN,
  }),
}
