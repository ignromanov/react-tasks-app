import md5      from 'md5'
import { conf } from './config'


export const tasksAPI = {
  fetch: ( { filter } ) => {
    const params =
            '&page=' + filter.page
            + '&sort_field=' + filter.sort_field
            + '&sort_direction=' + filter.sort_direction
    
    return fetch( `${conf.API_REFERENCE}/?${params}${conf.API_DEVELOPER}`, {
      method:  'GET',
      headers: {},
    } )
  },
  
  create: ( { task } ) => {
    const form = new FormData()
    // todo: should encode form items with encodeURIComponent
    form.append( 'email', task.email )
    form.append( 'text', task.text )
    form.append( 'username', task.username )
    form.append( 'image', task.image )
    
    return fetch( `${conf.API_REFERENCE}/create?${conf.API_DEVELOPER}`, {
      method:  'POST',
      headers: {},
      body:    form,
    } )
  },
  
  edit: ( { task } ) => {
    const form = new FormData()
    const signature = md5( getParamsString( task, form ) )
    
    form.append( 'token', conf.API_TOKEN )
    form.append( 'signature', signature )
    
    return fetch( `${conf.API_REFERENCE}/edit/${task.id}?${conf.API_DEVELOPER}`, {
      method:  'POST',
      headers: {},
      body:    form,
    } )
  },
}

const getParamsString = ( task, form ) =>
  Object.keys( task )
    .filter( key => key !== 'id' ).sort()
    .reduce( ( acc, key ) => {
      let encodedKey = encodeURIComponent( key )
      let encodedField = encodeURIComponent( task[key] )
      form.append( encodedKey, encodedField )
      return acc + `${encodedKey}=${encodedField}&`
    }, '' ) + `token=${conf.API_TOKEN}`
