const USER_WORKER = 'USER_WORKER';
const USER_EMPLOYER = 'USER_EMPLOYER';

export const user_worker = res => ({type: USER_WORKER, payload: res})

export const user_employer = res => ({type: USER_EMPLOYER, payload: res})

const defaultState = {
  name: '',
  logo: '',
  email: '',
  password: '',
  skills: '',
  picture: '',
  location: ''
}
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_WORKER:
      const { name, skills, picture, location, email, password } = action.payload
      return Object.assign({}, state, {
        name,
        skills,
        picture,
        location,
        email,
        password
      });
    case USER_EMPLOYER:
      const { logo } = action.payload
      return Object.assign({}, state, {
        name,
        logo,
        email,
        password
      });
    default:
      return state
  }
}
