import { tasksActions } from './actions'

export const fetchActor = ( state, dispatch ) => {
  if( !state.tasksState.get( 'isLoaded' ) && !state.tasksState.get( 'isLoading' ) )
    dispatch( tasksActions.fetchTasks() )
}
