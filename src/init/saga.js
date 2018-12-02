//Core
import { all, call } from 'redux-saga/effects';

// Wathers
// import { watcherTasks } from '../bus/tasks/saga/watchers';
// import { watchAuthentication } from '../bus/authenticate/saga/watchers';

export function* saga () {
  yield all([
    // call(watcherTasks),
    // call(watchAuthentication),
  ]);
}

