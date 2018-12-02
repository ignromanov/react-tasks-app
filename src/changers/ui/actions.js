import { types } from "./types"

export const uiActions = {
  openModalCreateTask: () => ({
    type: types.OPEN_MODAL_ADD_NEW_TASK
  }),
  
  closeModalAddNewTask: () => ({
    type: types.CLOSE_MODAL_ADD_NEW_TASK
  }),
  
  openModalLogin: () => ({
    type: types.OPEN_MODAL_LOGIN
  }),
  
  closeModalLogin: () => ({
    type: types.CLOSE_MODAL_LOGIN
  }),
}
