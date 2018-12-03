import { types } from './types'

export default store => next => action => {
  const { type, payload, callAPI, ...rest } = action
  if( !callAPI ) return next( action )
  
  next( {
    type: type + types.REQUEST, callAPI, payload, ...rest,
  } )
  
  callAPI( payload )
    .then( res => res.json() )
    .then( response => {
      if( response.status === 'error' ) throw response.message
      return next( { ...rest, type: type + types.SUCCESS, response: response.message } )
    } )
    .catch( error => next( { ...rest, type: type + types.FAIL, error } ) )
}