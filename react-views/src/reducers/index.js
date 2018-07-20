const USER_WORKER = 'USER_WORKER';
const USER_EMPLOYER = 'USER_EMPLOYER';

export const user_worker = res => ({
  type: USER_WORKER
})

export const user_employer = res =>({
  type: USER_EMPLOYER
})

const defaultState = {
      worker: false,
      employer: false
}
const reducer = (state = defaultState, action) => {

  switch (action.type) {
    case('USER_WORKER'):
      return Object.assign({}, state, {worker: true});

    case('USER_EMPLOYER'):
      return Object.assign({}, state, {employer: true});
    default:
      return state;
  }
}

export default reducer;
