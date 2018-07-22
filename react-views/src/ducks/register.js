const WORKER = 'WORKER';
const EMPLOYER = 'EMPLOYER';
cost LOGIN_PAGE_CHANGE = 'LOGIN_PAGE_CHANGE';

export const user_worker = res => ({type: WORKER, payload: res})

export const user_employer = res => ({type: EMPLOYER, payload: res})

export const loginPageChange = (key, value) => ({
  type: LOGIN_PAGE_CHANGE,
  payload: {
    key,
    value
  }
});

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
      case LOGIN_PAGE_CHANGE:
      return Object.assign({}, state, {[action.payload.key]: action.payload.value})
    default:
      return state
  }
}
