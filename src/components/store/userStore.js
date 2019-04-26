import { createConnectedStore } from 'undux';

const initialState = {
  id: undefined,
  name: undefined,
  courses: undefined,
  selectedCourse: undefined,
};

function withLocalStorage(store) {
  window.addEventListener('unload', () =>
    window.localStorage.setItem('unduxState', JSON.stringify(store.getState()))
  )
  return store
}

function fromLocalStorage(initialState) {
  let savedState = JSON.parse(window.localStorage.getItem('unduxState'))
  if (savedState === null) {
    return initialState
  }
  return {...initialState, ...savedState}
}

export default createConnectedStore(
  fromLocalStorage(initialState),
  withLocalStorage
);
