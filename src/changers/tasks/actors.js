import { tasksActions } from './actions'

export const fetchActor = ( state, dispatch ) => {
  const { tasksState } = state
  if( !tasksState.get( 'isLoaded' ) && !tasksState.get( 'isLoading' ) )
    dispatch( tasksActions.fetchTasks() )
}
