const WORKER = 'WORKER';
const EMPLOYER = 'EMPLOYER';

export const user_worker = res => ({type: WORKER, payload: res})

export const user_employer = res => ({type: EMPLOYER, payload: res})

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
    case WORKER:
      const { name, skills, picture, location, email, password } = action.payload
      return Object.assign({}, state, {
        name,
        skills,
        picture,
        location,
        email,
        password
      });
    case EMPLOYER:
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
