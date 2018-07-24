import {combineReducers} from 'redux';
import {reducer as userType} from '../ducks/userType';
import {reducer as register} from '../ducks/register';
import {reducer as userData} from '../ducks/userData';


const combineReducer = combineReducers({
  userType,
  register,
  userData

});

export default combineReducer
