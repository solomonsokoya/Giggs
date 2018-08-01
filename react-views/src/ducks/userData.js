const USER_DATA = 'USER_DATA';

export const user_data = res => ({type: USER_DATA, payload: res})

export const reducer = (state = '', action) => {
  switch (action.type) {
    case USER_DATA:
      const {id, name, logo, email} = action.payload.user
      return Object.assign({}, state, {id, name, logo, email})

    default:
      return state
  }

}
