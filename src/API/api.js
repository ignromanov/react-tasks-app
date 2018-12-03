import md5                                         from 'md5'
import { API_DEVELOPER, API_REFERENCE, API_TOKEN } from './config'


export const tasksAPI = {
  fetch: ( { filter } ) => {
    const params = '&page=' + filter.page
      + '&sort_field=' + filter.sort_field
      + '&sort_direction=' + filter.sort_direction
    
    return fetch( `${API_REFERENCE}/?${params}${API_DEVELOPER}`, {
      method:  'GET',
      headers: {},
    } )
  },
  
  create: ( { task } ) => {
    const form = new FormData()
    form.append( 'email', task.email )
    form.append( 'text', task.text )
    form.append( 'username', task.username )
    form.append( 'image', task.image )
    
    return fetch( `${API_REFERENCE}/create?${API_DEVELOPER}`, {
      method:   'POST',
      headers:  {},
      body:     form,
    } )
  },
  
  edit: ( { task } ) => {
    const form = new FormData()
    let paramsStr = Object.keys( task )
      .filter( key => key !== 'id' ).sort()
      .reduce( ( acc, key ) => {
        let encodedKey = fixedEncodeURIComponent( key )
        let encodedField = encodeURIComponent( task[key] )
        form.append( encodedKey, encodedField )
        return acc + `${encodedKey}=${encodedField}&`
      }, '' ) + `token=${API_TOKEN}`
    let signature = md5( paramsStr )
    
    console.log( paramsStr, signature )
    form.append( 'token', API_TOKEN )
    form.append( 'signature', signature )
    
    return fetch( `${API_REFERENCE}/edit/${task.id}?${API_DEVELOPER}`, {
      method:   'POST',
      headers:  {},
      body:     form,
    } )
  },
}

function fixedEncodeURIComponent( str ) {
  return encodeURIComponent( str ).replace( /[!'()*]/g, function( c ) {
    return '%' + c.charCodeAt( 0 ).toString( 16 )
  } )
}