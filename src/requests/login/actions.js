import {types} from "./types";

export const loginActions = {
  confirmLogin: (username, password) => {
    if(username === 'admin' && password === '123') {
      return {
        type: types.LOGIN,
        payload: { username }
      }
    }
    return { type: null }
  },
  
  confirmLogout: () => ({
    type: types.LOGOUT
  })
  
}