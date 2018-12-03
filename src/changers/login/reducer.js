import { fromJS } from 'immutable'
import { toast }  from 'react-toastify'
import { types }  from './types'

const initState = fromJS( {
  isLogin:  false,
  username: '',
} )

export const loginReducer = ( state = initState, action ) => {
  const { type, payload } = action
  
  switch( type ) {
    case types.LOGIN:
      toast.success( `Welcome ${payload.username}!` )
      return state
        .set( 'username', payload.username )
        .set( 'isLogin', true )
    
    case types.LOGOUT:
      return state
        .set( 'username', '' )
        .set( 'isLogin', false )
    
    default:
      return state
  }
}