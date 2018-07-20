import {combineReducers} from 'redux';
import {reducer as userType} from '../ducks/userType';
import {reducer as register} from '../ducks/register';


const combineReducer = combineReducers({
  userType,
  register

});

export default combineReducer
