import {createStore} from 'redux';
import userReducer from '../ducks/user';

const defaultState = {
    user:{
      worker: false,
      employer: false
    }
}


const store = createStore(userReducer, defaultState)

export default store;
