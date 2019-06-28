import {combineReducers} from 'redux';
import {
	errors
} from './auth/errorReducer';
import {
	auth,
	inputsValues
} from './auth/authReducer';


export default combineReducers({
	errors,
	auth,
	inputsValues,
});